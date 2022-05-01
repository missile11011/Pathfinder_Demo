export function dijkstra(grid, startNode, finishNode) {
	const visitedNodesInOrder = [];
	// startNode.distance = 0;
	grid[startNode.row][startNode.col].distance = 0;
	const unvisitedNodes = getAllNodes(grid);
	console.log(unvisitedNodes);
	while (!!unvisitedNodes.length) {
		sortNodesByDistance(unvisitedNodes);
		const closestNode = unvisitedNodes.shift();
		if (closestNode.state === "wall") continue;
		if (closestNode.distance === Infinity) return visitedNodesInOrder;
		closestNode.state = "visited";
		visitedNodesInOrder.push(closestNode);
		if (closestNode === grid[finishNode.row][finishNode.col])
			return visitedNodesInOrder;
		updateUnvisitedNeighbors(closestNode, grid);
	}
	return grid;
}

function sortNodesByDistance(unvisitedNodes) {
	unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
	const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
	for (const neighbor of unvisitedNeighbors) {
		if (neighbor.distance === Infinity) {
			neighbor.distance = node.distance + 1;
		}
		neighbor.previousNode = node;
	}
}

function getUnvisitedNeighbors(node, grid) {
	const neighbors = [];
	const {col, row} = node;
	if (row > 0) neighbors.push(grid[row - 1][col]);
	if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
	if (col > 0) neighbors.push(grid[row][col - 1]);
	if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

	return neighbors;
}

function getAllNodes(grid) {
	const nodes = [];
	for (const row of grid) {
		for (const node of row) {
			nodes.push(node);
		}
	}
	return nodes;
}
function finishNodeNeighbor(grid, currentNode) {
	const neighborNode = [];
	for (let i = 0; i < grid.length; i++) {
		console.log(grid[i]);
		if (
			grid[i].col === currentNode.col - 1 &&
			grid[i].row === currentNode.row
		) {
			console.log("test");
			neighborNode.push(grid[i]);
		}
		if (
			grid[i].col === currentNode.col + 1 &&
			grid[i].row === currentNode.row
		) {
			neighborNode.push(grid[i]);
		}
		if (
			grid[i].row + 1 === currentNode.row &&
			grid[i].col === currentNode.col
		) {
			neighborNode.push(grid[i]);
		}
		if (
			grid[i].row - 1 === currentNode.row &&
			grid[i].col === currentNode.col
		) {
			neighborNode.push(grid[i]);
		}
		console.log(neighborNode);
	}
	return neighborNode;
}
// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(grid, finishNode) {
	const nodesInShortestPathOrder = [];

	const allNodes = grid;
	const endNode = allNodes.length - 1;
	let currentNode = grid[endNode];
	
	const neighborNode = getUnvisitedNeighbors(currentNode, grid);

	while (currentNode !== null) {
		const neighborNode = finishNodeNeighbor(allNodes, currentNode);
		console.log("currentNode", currentNode);
		console.log("neighbor", neighborNode);
		for (let i = 0; i < neighborNode.length; i++) {
			if (neighborNode[i].distance < currentNode.distance) {
				nodesInShortestPathOrder.push(neighborNode[i]);
				currentNode = neighborNode[i];
				console.log("less than", neighborNode[i].distance);
			}
		}
		if (currentNode.distance === 1) {
			currentNode = null;
		}
		
	}

	return nodesInShortestPathOrder;
}

export default dijkstra;
