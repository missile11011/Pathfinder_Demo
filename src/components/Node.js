import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SET_START_NODE, SET_FINISH_NODE} from "../utils/actions";
import "./node.css";

const Node = (props) => {
	const [nodeState, setNodeState] = useState("");
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const {stateChange, startNode, finishNode} = state;
	const {row, col, nodestate, distance} = props;
	useEffect(() => {
		if (nodeState === "start") {
			setNodeState("none");
		}
		if (nodeState === "finish") {
			setNodeState("none");
		}
		if (startNode.row === row && startNode.col === col) {
			setNodeState("start");
		}
		if (finishNode.row === row && finishNode.col === col) {
			setNodeState("finish");
		}
	}, [startNode, finishNode, nodestate]);

	const handelClick = () => {
		if (stateChange === "start") {
			dispatch({
				type: SET_START_NODE,
				startNode: {row: row, col: col, distance: 0},
			});
		} else if (stateChange === "finish") {
			dispatch({
				type: SET_FINISH_NODE,
				finishNode: {row: row, col: col},
			});
		} else {
			setNodeState(stateChange);
		}
	};
	return (
		<div
			className={`border border-dark node ${nodeState}`}
			id={`node-${row}-${col}`}
			nodestate={nodeState}
			row={row}
			col={col}
			onClick={handelClick}
		></div>
	);
};

export default Node;
