//用WeakMap来存储已经拷贝的对象引用
function deepCopy(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (seen.has(obj)) return seen.get(obj); 
  
  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);
  
  for (let key in obj) {
    copy[key] = safeDeepCopy(obj[key], seen);
  }
  
  return copy;
}