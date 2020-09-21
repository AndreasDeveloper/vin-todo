module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      sass: {
          prependData: `
          @import "@/styles/base/_variables.scss";
          @import "@/styles/base/_mixins.scss";
          `
      }
    }
  }
};