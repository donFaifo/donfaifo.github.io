export default function (eleventyConfig) {
	
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");
    
    eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
        
	});
    
};