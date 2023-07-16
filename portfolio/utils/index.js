import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-04',
    useCdn: false
  });

  export const getProjects = () => {
    const query = `*[_type == "projects"]`
    return client.fetch(query)
  }

  export const getProjectById = async (id) => {
    const query = `*[_type == "projects" && _id == "${id}"] {
      name,
      demoSiteRef ,
      sourceCodeRef,
      myRole,
      startDate,
      endDate,
      appDescription,
      problemStatement,
      figmaImage,
      learnings,
      challenges,
      mobileProductImage,
      productImage,
      userFlowImages,
      industryImage,
    }`
    const result = await client.fetch(query);
    return result 
  }