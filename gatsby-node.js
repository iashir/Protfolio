exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-pdf/, // check /pdfjs-dist/ too
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /pdfjs-dist/, // check /pdfjs-dist/ too
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
