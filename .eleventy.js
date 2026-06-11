const markdownIt = require("markdown-it");
const md = new markdownIt({ html: true, linkify: true, typographer: true });

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addFilter("markdownify", (str) => {
    return str ? md.render(str) : "";
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};
