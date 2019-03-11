function Stack() {
	this.dataStore = []
	this.top = 0 // 记录栈顶位置
	this.push = push
	this.pop = pop
	this.peek = peek
	this.clear = clear
	this.length = length
}

function push(element) {
	this.dataStore[this.top++] = element
}

function pop() {
	return this.dataStore[--this.top]
}

function peek() {
	return this.dataStore[this.top - 1]
}

function clear() {
	this.top = 0
}

function length() {
	return this.top
}

module.exports = Stack