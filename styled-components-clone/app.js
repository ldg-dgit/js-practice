const styled = (css) => {
	const el = document.createElement(css);
	return (args) => {
		const styled = args[0];
		el.style = styles;
		return el;
	};
};

const title = styled("h1")`
	border-radius: 10px;
	color: blue;
`;

console.log(title);
