import { VentoPlugin } from 'eleventy-plugin-vento';

export default function(eleventyConfig) {
  // enable vento
  eleventyConfig.addPlugin(VentoPlugin);

  // eleventy folder config
  eleventyConfig.setInputDirectory("src");

  // passthrough files
  eleventyConfig.addPassthroughCopy("src/assets/");

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  return {
    markdownTemplateEngine: "vto",
		dataTemplateEngine: 'vto',
		htmlTemplateEngine: 'vto'
  };
};
