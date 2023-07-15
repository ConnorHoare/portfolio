export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'demoSiteRef',
            type: 'url',
            title: 'Demo Site',
        },
        {
            name: 'sourceCodeRef',
            type: 'url',
            title: 'Source Code',
        },
        {
            name: 'myRole',
            type: 'string',
            title: 'My Role'
        },
        {
            name: 'startDate',
            type: 'date',
            title: 'Start Date'
        },
        {
            name: 'endDate',
            type: 'date',
            title: 'End Date'
        },
        {
            name: 'techStack',
            type: 'array',
            title: 'Tech Stack',
            of: [{type: 'image'}]
        },
        {
            name: 'appDescription',
            type: 'text',
            title: 'App Description'
        },
        {
            name: 'problemStatement',
            type: 'text',
            title: 'Problem Statement'
        },
        {
            name: 'figmaImage',
            type: 'image',
            title: 'Figma Image'
        },
        {
            name: 'userFlowImages',
            type: 'image',
            title: 'User Flow Images'
        },
        {
            name:'productImage',
            type: 'image',
            title: 'Product Images'
        },
        {
            name:'mobileProductImage',
            type: 'image',
            title: 'Mobile Product Images'
        },
        {
            name:'industryImage',
            type: 'image',
            title: 'Ind image'
        },
        {
            name: 'learnings',
            type: 'array',
            title: 'Learnings',
            of: [{type: 'text'}]
        },
        {
            name: 'challenges',
            type: 'array',
            title: 'Challenges',
            of: [{type: 'text'}]
        }
    ]
}