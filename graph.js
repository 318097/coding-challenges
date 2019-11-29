/* 
  Graph can be implemented using 3 techniques:
  1. Adjacent List:- Store the mapping in hash maps.
    ex., const graph = {
      0: [1, 5, 8],
      1: [2, 4, 6],
    };
  
  2. Edge List:- Store the edges in an array
  ex., const graph = [
  [0, 2],
  [4, 7],
  [8, 9]
  ];

  3. Adjacency matrix
  ex., const graph = [
  [0, 1, 0, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
  ];
*/
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  removeEdge(node1, node2) {
    this.adjacentList[node1] = this.adjacentList[node1].filter(node => node !== node2);
    this.adjacentList[node2] = this.adjacentList[node2].filter(node => node !== node1);
  }

  removeVertex(node) {
    this.adjacentList[node].forEach(v => this.removeEdge(v, node));
    delete this.adjacentList[node];
    this.numberOfNodes--;
  }
}

const graph = new Graph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addEdge('a', 'b');
graph.addEdge('a', 'c');
graph.addEdge('b', 'c');
graph.addEdge('a', 'd');
graph.removeVertex('a');

console.log(graph);