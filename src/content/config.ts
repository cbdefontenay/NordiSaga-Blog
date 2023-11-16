import {defineCollection, z} from "astro:content";


const postCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

export const collections = {
    posts: postCollection,
};

