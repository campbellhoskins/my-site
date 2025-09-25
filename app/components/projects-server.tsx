import { getProjects } from 'app/projects/utils'
import { ProjectsListClient } from './projects-client'

export function ProjectsList() {
  const projects = getProjects()
  
  return <ProjectsListClient projects={projects} />
}
