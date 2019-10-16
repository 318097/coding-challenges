function balancedBrackets(str) {
	const stack = [];
	const mapping = {
		'}': '{',
		']': '[',
		')': '('
	};
	str.split('').forEach(char => {
		if(['{', '[', '('].includes(char)){
			stack.push(char);
		}else if(stack[stack.length - 1] === mapping[char]){
			stack.pop();
		}
	})
	console.log(stack.length ? 'NO' : 'YES');
}

balancedBrackets('{[()]}');
