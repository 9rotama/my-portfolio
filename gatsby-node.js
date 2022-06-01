exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === `/`) {
      page.matchPath = `/*`;
      createPage(page);
  }
};

const resolve = require('path').resolve
exports.onCreateWebpackConfig = ({ actions }) => {

  actions.setWebpackConfig({
    devServer: {
      contentBase: `${__dirname}/dist`,
      historyApiFallback: true
    }
  })
}