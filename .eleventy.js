 module.exports = function (eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./imgs")
  return { 
    dir: { 
      input: 'src', 
      output: 'docs'
    },
   };
};