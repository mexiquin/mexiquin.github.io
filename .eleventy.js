import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function(eleventyConfig) {

  // enable webc
  eleventyConfig.addPlugin(pluginWebc, {
		// Glob to find no-import global components
		// (The default changed from `false` in Eleventy WebC v0.7.0)
		components: "src/_includes/components/**/*.webc",

		// Adds an Eleventy WebC transform to process all HTML output
		useTransform: false,

		// Additional global data used in the Eleventy WebC transform
		transformData: {},

		// Options passed to @11ty/eleventy-plugin-bundle
		bundlePluginOptions: {},
	});

  // enable eleventy navigation
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // eleventy folder config
  eleventyConfig.setInputDirectory("src");

  // passthrough files
  eleventyConfig.addPassthroughCopy("src/assets/");

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  return {
    markdownTemplateEngine: "webc",
		dataTemplateEngine: 'webc',
		htmlTemplateEngine: 'webc'
  };
};
