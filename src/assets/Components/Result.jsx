import React from "react";

const Result = ({length, correct}) => {
    return (
        <div className="res-wrapper">
            <h1>Results</h1>
            <h4>You correctly answered {correct} questions out of {length}</h4>
        </div>
    )
}

export default Result;