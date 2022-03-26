import React, {useEffect, useState} from "react";
import Node from "./Node.js";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_STATE_CHANGE} from "../utils/actions.js";
import "./node.css";

const Grid = () => {
	const [nodeState] = useState("");
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		// const [startRow, startCol] = startNode;
		// const nodeElement = document.getElementById(`node-${row}-${col}`)
		// nodeElement.setAttribute("nodestate", "start")
		// console.log(nodeElement)
	}, []);
	const initNode = (row, col) => {
		return {
			row,
			col,
		};
	};
	const getGrid = () => {
		const grid = [];
		for (let row = 0; row < 20; row++) {
			const currentRow = [];
			for (let col = 0; col < 48; col++) {
				currentRow.push(initNode(row, col));
			}
			grid.push(currentRow);
		}
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
			default:
				return "";
		}
	};
	const grid = getGrid();

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

			<div className="">
				{grid.map((row, rowIndex) => {
					return (
						<span
							className="node-row justify-content-center"
							key={rowIndex}
						>
							{row.map((node, colIndex) => {
								const {row, col, isStart} = node;
								return (
									<div
										id={`div-${rowIndex}-${colIndex}`}
										key={`${rowIndex}-${colIndex}`}
										className=""
									>
										<Node
											nodestate={nodeState}
											key={colIndex}
											col={col}
											row={row}
											isStart={isStart}
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
