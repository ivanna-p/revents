import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.test.data);

    return (
        <>
            <h1>Testing 224</h1>
            <h3>The data is: {data}</h3>
            <Button
                onClick={() => dispatch(decrement(5))}
                content='decrement'
                color='red'
            />
            <Button
                onClick={() => dispatch(increment(10))}
                content='increment'
                color='green'
            />
            <Button
                onClick={() =>
                    dispatch(
                        openModal({
                            modalType: "TestModal",
                            modalProps: { data },
                        })
                    )
                }
                content='Open Modal'
                color='teal'
            />
        </>
    );
}
