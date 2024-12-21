const config = {
  staticDirs: ['../public'], // Carregar arquivos estáticos, como imagens, estilos e arquivos de configuração
  stories: ['../src/components/**/*.stories.tsx'], // Define os arquivos de histórias do Storybook localizados na pasta de componentes
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`) // Adiciona a pasta de componentes ao caminho de resolução do Webpack
    return config
  }
}
export default config
