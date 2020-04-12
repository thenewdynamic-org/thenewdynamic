const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./layouts/**/*.html", "./assets/js/**/*.{js,vue}"],
	defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
	whitelist: [
    "fill-current",
		"block",
		"w-full",
		"h-full",
		"hover:bg-gray-400",
		"bg-white",
		"mb-2",
		"mr-2",
		"px-2",
		"px-3",
		"py-1",
		"-ml-3",
		"py-1",
		"pr-3",
		"py-2",
		"pl-8",
		"font-bold",
		"font-semibold",
		"font-medium",
		"border",
		"-mt-4",
		"rounded",
		"rounded-b",
		"text-gray-700",
		"text-gray-900",
		"placeholder-gray-500",
		"focus:outline-none",
		"focus:placeholder-gray-400",
		"sm:text-sm",
		"text-xs",
		"text-sm",
		"text-base",
		"text-xl",
		"text-2xl",
		"text-3xl",
		"sm:grid",
		"grid-cols-2",
		"md:grid-cols-3",
		"lg:grid-cols-4",
		"gap-4",
		"no-underline",
		"shadow-md",
		"hover:shadow-xl",
		"uppercase",
		"leading-tight",
	],
});

module.exports = {
	plugins: [
		require("postcss-import")({
			path: ["assets/css"],
		}),
		require("tailwindcss")("./assets/css/tailwindcss.config.js"),
		require("autoprefixer"),
		...(process.env.HUGO_ENV !== "development" ? [purgecss] : []),
	],
};
