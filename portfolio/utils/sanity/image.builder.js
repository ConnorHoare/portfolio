
import imageUrlBuilder from '@sanity/image-url'
import { client } from '..';

const builder = imageUrlBuilder(client);

// export const urlForImage = (source) => builder.image(source).height(320).width(320).url().toString();