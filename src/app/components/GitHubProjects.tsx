import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/7rafael1farias0/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching GitHub repos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 rounded-xl bg-white/5 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, index) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-all"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all"></div>

          <div className="relative">
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-lg font-semibold text-white truncate flex-1">{repo.name}</h4>
              <ExternalLink className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <p className="text-sm text-white/70 mb-4 line-clamp-2 h-10">
              {repo.description || 'Sem descrição'}
            </p>

            <div className="flex items-center gap-4 text-xs text-white/60">
              {repo.language && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span>{repo.language}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
