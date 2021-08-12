import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs fetch', () => {
   test('debe de tarer 10 elementos', async () => {
      const gifs = await getGifs('Pokemon');
      expect(gifs.length).toBe(10);
   })

   test('debe de tarer 0 elementos', async () => {
      const gifs = await getGifs('');
      expect(gifs.length).toBe(0);
   })
})
