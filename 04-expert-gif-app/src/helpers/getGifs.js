export const getGifs = async ( category ) => {
   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=nuOhx2V0BR0IU9iyo8u3PsKRKAICXbwF`;

   const resp = await fetch( url );
   const { data } = await resp.json();

   const gifs = data.map(img => {
      return{
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url
      }
   })
   return gifs;
}