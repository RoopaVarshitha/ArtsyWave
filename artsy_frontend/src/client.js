import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client=  createClient({
projectId:'xlw2neew',

dataset: 'production',
apiVersion:'2023-08-21',
//lets us show images more quickly to thwe world
useCdn: true,
token:'process.env.REACT_APP_SANITY_TOKEN',


});
//u can find in sanity documentation 
//it is used only when we use images and nothing special
const builder= imageUrlBuilder(client);

export const urlFor =(source) => builder.image(source);