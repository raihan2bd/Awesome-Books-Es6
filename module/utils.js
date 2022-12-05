// This generateId function will return unique id for book
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

export default generateId;