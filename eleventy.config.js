export default function (eleventyConfig) {
	
    eleventyConfig.setInputDirectory("src");
    
    eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
        
	});
    
};