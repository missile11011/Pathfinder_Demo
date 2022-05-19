import React, {useEffect, useState} from "react";
import Node from "./Node.js";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_GRID, UPDATE_STATE_CHANGE} from "../utils/actions.js";
import "./node.css";
import {
	dijkstra,
	getNodesInShortestPathOrder,
} from "../utils/algorithms/dijkstra.js";

const Grid = () => {
	const [grid, setGrid] = useState([]);
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const {startNode, finishNode, stateChange} = state;

	useEffect(() => {
		initGrid();
	}, []);

	const initNode = (row, col) => {
		return {
			row,
			col,
			distance: Infinity,
			previousNode: null,
			state: "none",
		};
	};
	const initGrid = () => {
		const grid = [];
		for (let row = 0; row < 20; row++) {
			const currentRow = [];
			for (let col = 0; col < 48; col++) {
				currentRow.push(initNode(row, col));
			}
			grid.push(currentRow);
		}
		dispatch({type: UPDATE_STATE_CHANGE, stateChange: "none"});
		setGrid(grid);
	};

	const changeGrid = (grid, row, col) => {
		grid[row][col].state = stateChange;
	};

	const runDijkstra = () => {
		const dijkstraGrid = dijkstra(grid, startNode, finishNode);
		dijkstraGrid.map((visitedNode, nodeIndex) => {
			// if (visitedNode !== "visited") {
				console.log(visitedNode)
				// setInterval(() => {
					let row = visitedNode.row
					let col = visitedNode.col
					let node = document.getElementById(`node-${row}-${col}`)
					
					node.nodestate = "visited";
					console.log(node)
				// }, nodeIndex * 10);
			// }
		});

		dispatch({type: UPDATE_STATE_CHANGE, stateChange: stateChange});
		const shortestPath = getNodesInShortestPathOrder(
			dijkstraGrid,
			finishNode
		);
		console.log(dijkstraGrid);
		return grid;
	};

	const changeState = (e) => {
		switch (e.target.id) {
			case "weight-btn":
				dispatch({
					type: UPDATE_STATE_CHANGE,
					stateChange: "weight",
				});
				return;
			case "wall-btn":
				dispatch({
					type: UPDATE_STATE_CHANGE,
					stateChange: "wall",
				});
				return;
			case "start-btn":
				dispatch({
					type: UPDATE_STATE_CHANGE,
					stateChange: "start",
				});
				return;
			case "finish-btn":
				dispatch({
					type: UPDATE_STATE_CHANGE,
					stateChange: "finish",
				});
				return;
			case "delete-btn":
				dispatch({
					type: UPDATE_STATE_CHANGE,
					stateChange: "none",
				});
			default:
				return "";
		}
	};
	return (
		<div className="p-3">
			<button
				id="start-btn"
				className="btn btn-success m-2"
				onClick={changeState}
			>
				Start
			</button>
			<button
				id="finish-btn"
				className="btn btn-danger m-2"
				onClick={changeState}
			>
				Finish
			</button>
			<button
				id="wall-btn"
				className="btn btn-dark m-2"
				onMouseDown={changeState}
			>
				wall
			</button>
			<button
				id="weight-btn"
				className="btn btn-primary m-2"
				onClick={changeState}
			>
				weight
			</button>
			<button
				id="clear-btn"
				className="btn btn-outline-danger m-2"
				onClick={initGrid}
			>
				clear all
			</button>
			<button
				id="delete-btn"
				className="btn btn-outline-danger m-2"
				onClick={changeState}
			>
				delete
			</button>
			<button
				id="run-button"
				className="btn btn-outline-success m-2"
				onClick={runDijkstra}
			>
				Run
			</button>

			<div className="">
				{grid.map((row, rowIndex) => {
					return (
						<span
							className="node-row justify-content-center"
							key={rowIndex}
						>
							{row.map((node, colIndex) => {
								const {row, col, state, distance} = node;
								return (
									<div
										id={`div-${rowIndex}-${colIndex}`}
										key={`${rowIndex}-${colIndex}`}
										className={state}
										onClick={(e) => {
											changeGrid(grid, row, col);
										}}
									>
										<Node
											nodestate={state}
											key={colIndex}
											col={col}
											row={row}
											distance={distance}
										></Node>
									</div>
								);
							})}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Grid;
