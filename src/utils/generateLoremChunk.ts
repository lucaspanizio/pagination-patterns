const LOREM_BASE = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci libero. Donec vehicula bibendum vestibulum.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est ligula bibendum elit, a condimentum lorem ligula at libero.',
  'Integer in ante et lectus tempor lacinia. In ultricies magna et ipsum sodales, non scelerisque ex bibendum. Cras consectetur tortor nec neque gravida, vel blandit ligula aliquet.',
  'Vivamus vehicula massa nec metus luctus, at iaculis urna lacinia. Morbi non lorem nunc. In et leo sit amet nulla auctor luctus ac nec elit.',
  'Phasellus fermentum dolor ut velit cursus dictum. Suspendisse potenti. Curabitur at nunc augue. Etiam faucibus ligula et lectus dapibus, vel venenatis urna congue.',
  'Vestibulum lacinia velit ut felis pretium, eget sodales nisl dignissim. Sed nec libero nec ante tincidunt varius in non nunc. Donec sollicitudin suscipit justo, a congue nulla ultricies et.',
  'Aliquam erat volutpat. Vivamus facilisis dolor in risus dictum, ac gravida nunc pretium. Mauris dictum eros et justo malesuada, sit amet tempus risus feugiat.',
  'Integer vel arcu sed turpis lacinia sodales. Nulla facilisi. Duis ac erat tincidunt, sollicitudin odio non, vestibulum mi. Mauris laoreet, orci et elementum aliquet, risus justo volutpat nulla, at auctor arcu elit et urna.',
]

/**
 * Gera um texto Lorem Ipsum variado com base no número de parágrafos especificado.
 *
 * Utiliza um conjunto de trechos pré-definidos (base de Lorem Ipsum) para selecionar aleatoriamente e formar o texto resultante.
 *
 * @param {number} paragraphs - O número de parágrafos de Lorem Ipsum a serem gerados. Cada parágrafo é formado por trechos aleatórios do array base.
 * @returns {string} Um texto concatenado composto pelos parágrafos gerados. Os parágrafos são separados por um espaço.
 * @example
 * const generatedText = generateLoremChunk(3);
 * console.log(generatedText);
 * // Output example:
 * // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci libero. Donec vehicula bibendum vestibulum.
 * // Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 * // Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
 */
export const generateLoremChunk = (paragraphs: number): string => {
  return Array.from(
    { length: paragraphs },
    () => LOREM_BASE[Math.floor(Math.random() * LOREM_BASE.length)]
  ).join(' ')
}
