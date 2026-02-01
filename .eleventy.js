import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { VentoPlugin } from 'eleventy-plugin-vento';

export default function (eleventyConfig) {

  // enable vento
  eleventyConfig.addPlugin(VentoPlugin, {
    plugins: [],
    shortcodes: true,
    pairedShortcodes: true,
    filters: true,
    ventoOptions: {
      includes: "src/_includes"
    }
  });

  // enable eleventy navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // eleventy folder config
  eleventyConfig.setInputDirectory("src");

  // passthrough files
  eleventyConfig.addPassthroughCopy("src/assets/");
  // copy pico css
  eleventyConfig.addPassthroughCopy({ "node_modules/@picocss/pico/css/pico.min.css": "css/pico.min.css" });
  // copy custom css
  eleventyConfig.addPassthroughCopy("src/styles/index.css");

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  return {
    dir: { input: 'src', output: '_site' },
    markdownTemplateEngine: 'vto',
    dataTemplateEngine: 'vto',
    htmlTemplateEngine: 'vto'
  };
};
