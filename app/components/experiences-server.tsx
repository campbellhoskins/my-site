import { getExperiences } from 'app/experiences/utils'
import { ExperiencesListClient } from './experiences-client'

export function ExperiencesList() {
  const experiences = getExperiences()
  
  return <ExperiencesListClient experiences={experiences} />
}
