import { loremIpsumChunkGenerator } from '../utils/loremIpsumChunkGenerator'

type TResponseLoremIpsum = { id: number; text: string }[]

export const fetchLoremIpsum = async (
  page: number
): Promise<TResponseLoremIpsum> => {
  return new Promise<TResponseLoremIpsum>((resolve) => {
    setTimeout(() => {
      // Gerando um array de itens com texto Lorem Ipsum variado
      const newItems = Array.from({ length: 30 }, (_, i) => ({
        id: (page - 1) * 10 + i + 1,
        text: loremIpsumChunkGenerator(1),
      }))

      resolve(newItems)
    }, 1000)
  })
}
