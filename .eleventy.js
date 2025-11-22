import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
  // enable webc
	eleventyConfig.addPlugin(pluginWebc, {
    components: "_components/**/*.webc",
    useTransform: false
  });

  eleventyConfig.setInputDirectory("src");
};
