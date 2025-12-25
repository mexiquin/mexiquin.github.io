import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { VentoPlugin } from 'eleventy-plugin-vento';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

export default function(eleventyConfig) {
  
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

  // Collections
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });


  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/styles/index.css');
    const tailwindOutputPath = './_site/styles/index.css';
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
    const outputDir = path.dirname(tailwindOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await postcss([tailwindcss()]).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);

    return {
      dir: { input: 'src', output: '_site' },
      markdownTemplateEngine: 'vto',
      dataTemplateEngine: 'vto',
      htmlTemplateEngine: 'vto'
    };
  });
};
