// run `node index.js` in the terminal

const classifier = new require('natural-brain').BrainJSClassifier();

classifier.addDocument('what is endcap', 'tutorial');
classifier.addDocument('how to edit onhand qty', 'navigation');

console.log(`Hello Node.js v${process.versions.node}!`);
