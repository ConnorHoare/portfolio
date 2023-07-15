
import { getProjectById, getProjects } from '../../../../utils'
import CaseStudiesDetail from '@/sections/CaseStudiesDetail'


const page = async ({ params }) => {
  const { slug } = params
  const data = await getProjectById(slug)
  const projects = await getProjects()
  console.log(data)

  return (
    <CaseStudiesDetail data={data?.[0]} projects={projects} />
  )
}

export default page;