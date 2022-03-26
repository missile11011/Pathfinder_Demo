import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SET_START_NODE, SET_FINISH_NODE} from "../utils/actions";
import "./node.css";
// import { handelClick } from "./Grid"
const Node = (props) => {
	const [nodeState, setNodeState] = useState("");
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const {stateChange, startNode, finishNode} = state;
	const {row, col, nodestate} = props;
	useEffect(() => {
		if (nodeState === "start") {
			setNodeState("");
		}
		if (nodeState === "finish") {
			setNodeState("");
		}
		if (startNode[0] === row && startNode[1] === col) {
			console.log("is start", row, col);
			setNodeState("start");
		}
		if (finishNode[0] === row && finishNode[1] === col) {
			setNodeState("finish");
			console.log("is finish", row, col);
		}
	}, [startNode, finishNode]);

	const handelClick = () => {
		if (stateChange === "start") {
			dispatch({
				type: SET_START_NODE,
				startNode: [row, col],
			});
		} else if (stateChange === "finish") {
			dispatch({
				type: SET_FINISH_NODE,
				finishNode: [row, col],
			});
		} else {
			setNodeState(stateChange);
		}
	};

	return (
		<div
			className={`border border-dark node ${nodeState}`}
			id={`node-${props.row}-${props.col}`}
			nodestate={nodestate}
			row={row}
			col={col}
			onClick={handelClick}
		></div>
	);
};

export default Node;
