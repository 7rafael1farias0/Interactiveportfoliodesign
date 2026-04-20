import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { PortfolioCard } from './components/PortfolioCard';
import { GitHubProjects } from './components/GitHubProjects';
import {
  Code2,
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  FolderGit2
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Skills */}
          <PortfolioCard
            title="Skills"
            icon={<Code2 className="w-6 h-6 text-cyan-400" />}
            gradient="from-cyan-500/20 to-blue-500/20"
          >
            <div className="space-y-4">
              <SkillCategory
                title="Linguagens"
                skills={['JavaScript', 'Python']}
              />
              <SkillCategory
                title="Front-end"
                skills={['HTML5', 'CSS3', 'React']}
              />
              <SkillCategory
                title="Back-end & Ferramentas"
                skills={['APIs', 'GitHub Copilot', 'Refatoração Segura']}
              />
              <SkillCategory
                title="Outros"
                skills={['Gestão de KPIs', 'Análise de Dados', 'Microsoft Office', 'Google Workspace']}
              />
            </div>
          </PortfolioCard>

          {/* Idiomas */}
          <PortfolioCard
            title="Idiomas"
            icon={<Languages className="w-6 h-6 text-purple-400" />}
            gradient="from-purple-500/20 to-pink-500/20"
          >
            <div className="space-y-3">
              <LanguageBar language="Português" level={100} />
              <LanguageBar language="Inglês" level={60} />
            </div>
          </PortfolioCard>

          {/* Educação */}
          <PortfolioCard
            title="Educação"
            icon={<GraduationCap className="w-6 h-6 text-green-400" />}
            gradient="from-green-500/20 to-emerald-500/20"
          >
            <div className="space-y-4">
              <EducationItem
                degree="Tecnólogo em Análise e Desenvolvimento de Sistemas"
                institution="Uniritter"
                period="2025 - 2027"
                status="Em andamento"
              />
            </div>
          </PortfolioCard>

          {/* Certificações */}
          <PortfolioCard
            title="Certificações"
            icon={<Award className="w-6 h-6 text-yellow-400" />}
            gradient="from-yellow-500/20 to-orange-500/20"
          >
            <div className="space-y-3">
              <h4 className="text-white/80 font-semibold mb-2">IFRS - Gestão</h4>
              <CertItem title="Gestão de Pessoas: Conceitos e Processos" hours="40h" />
              <CertItem title="Gerenciamento de Equipes" hours="20h" />
              <CertItem title="Liderança e Trabalho em Equipe" hours="20h" />
              <CertItem title="Gestão de Tempo e Organização" hours="20h" />

              <h4 className="text-white/80 font-semibold mb-2 mt-4">DIO</h4>
              <CertItem title="GitHub Copilot - Código na prática" hours="12h" />
            </div>
          </PortfolioCard>

          {/* Experiência Profissional */}
          <PortfolioCard
            title="Experiência Profissional"
            icon={<Briefcase className="w-6 h-6 text-red-400" />}
            gradient="from-red-500/20 to-rose-500/20"
          >
            <div className="space-y-6">
              <ExperienceItem
                title="Supervisor de Operações"
                company="M1 Transportes Sustentáveis LTDA"
                period="12/2024 - 11/2025"
                description="Gestão direta de operações, liderança de equipes, análise e apresentação de KPI's, registros de feedbacks, controle de custos, Google Sheets, Docs e Apresentações."
              />
              <ExperienceItem
                title="Assistente de Prevenção de Perdas"
                company="M1 Transportes - POA/CWB/FLN"
                period="11/2023 - 11/2024"
                description="Análise de dados, apresentação de KPI's, envio de chamados, contato com clientes, inventário de ativos, controle de custos."
              />
              <ExperienceItem
                title="Técnico de Conservação"
                company="M1 Transportes Sustentáveis LTDA"
                period="04/2022 - 10/2023"
                description="Manutenção e limpeza de bicicletas, docks e painel de controle das estações."
              />
              <ExperienceItem
                title="Repositor"
                company="M1 Transportes Sustentáveis LTDA"
                period="10/2021 - 03/2022"
                description="Distribuição de bicicletas em pontos estratégicos."
              />
            </div>
          </PortfolioCard>
        </motion.div>

        {/* Portfolio - GitHub Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
              <FolderGit2 className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Portfolio - Projetos GitHub</h2>
          </div>
          <GitHubProjects />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-white/40 text-sm pb-8"
        >
          <p>© 2026 Rafael Borges Farias - Desenvolvedor em constante evolução 🚀</p>
        </motion.div>
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h4 className="text-white/80 font-semibold mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function LanguageBar({ language, level }: { language: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-white/80 text-sm mb-2">
        <span>{language}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}

function EducationItem({
  degree,
  institution,
  period,
  status,
}: {
  degree: string;
  institution: string;
  period: string;
  status: string;
}) {
  return (
    <div className="border-l-2 border-green-400/50 pl-4">
      <h4 className="text-white font-semibold">{degree}</h4>
      <p className="text-white/70 text-sm">{institution}</p>
      <p className="text-white/50 text-xs mt-1">{period}</p>
      <span className="inline-block mt-2 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
        {status}
      </span>
    </div>
  );
}

function CertItem({ title, hours }: { title: string; hours: string }) {
  return (
    <div className="flex items-start gap-2 text-white/80 text-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></div>
      <div className="flex-1">
        <span>{title}</span>
        <span className="text-white/50 ml-2">({hours})</span>
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-red-400/50 pl-4">
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-white/70 text-sm">{company}</p>
      <p className="text-white/50 text-xs mt-1 mb-2">{period}</p>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}