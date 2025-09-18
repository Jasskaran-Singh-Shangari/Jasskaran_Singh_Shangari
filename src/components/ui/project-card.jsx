import { assets } from '../../assets/assets.js'
import { motion } from 'framer-motion'


function CardTag({ children }) {
  return (
    <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 mr-2">
      {children}
    </span>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className="group bg-white/80 dark:bg-zinc-900/60 backdrop-blur rounded-2xl shadow-md overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-lg w-[90%]"
    >
      
      {project.image ? (
        <div className="h-[12rem] w-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-[12rem] w-full flex items-center justify-center bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-700 dark:to-purple-700">
          <span className="text-3xl font-semibold text-white/95">{project.title.charAt(0)}</span>
        </div>
      )}

      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between text-center">
          <div className='w-full text-center'>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 w-full">{project.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">{project.description}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center space-y-2 ">
          {(project.tags || []).slice(0,6).map((t) => (
            <CardTag key={t}>{t}</CardTag>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              View Code
            </a>
          )}

          {/* optional: small meta */}
          {!(project.demoUrl || project.repoUrl) && (
            <span className="text-sm text-zinc-500 dark:text-zinc-400">No links provided</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectGrid({ projects = [] }) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id ?? i} project={p} />
        ))}
      </div>
    </section>
  )
}

// Optional: small example dataset you can paste into a page to test
export const exampleProjects = [
  {
    id: 1,
    title: 'DevDiary',
    description: 'DevDiary full stack blog website, where anyone can share their knowledge and achievements with others easily.',
    image: assets.DevDiary,
    tags: ['MongoDB', 'React', 'Node', 'Express', 'Tailwind','TanStack'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Jasskaran-Singh-Shangari/DevDiaries-A-Blog-Website'
  },
  {
    id: 2,
    title: 'Chatter Box',
    description: 'ChatterBox is a full-stack real-time chat application that enables seamless one-to-one communication with instant message delivery',
    image: assets.ChatterBox,
    tags: ['MongoDB', 'React', 'Node', 'Express','Tailwind', 'Socket.io'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Jasskaran-Singh-Shangari/ChatterBox'
  },
  {
    id: 3,
    title: 'PinVoyage',
    description: 'Share your review and experience of locations with all of the world.',
    image: assets.PinVoyage,
    tags: ['MongoDB', 'React', 'Node', 'Express','Tailwind', 'Mapbox'],
    demoUrl: '#',
    repoUrl: 'https://github.com/Jasskaran-Singh-Shangari/PinVoyage'
  }
]
