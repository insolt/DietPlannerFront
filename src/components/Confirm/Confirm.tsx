import React, {useEffect, useState} from "react";
import "./Confirm.css";


interface Props {
    message: string,
}

export const Confirm = (props: Props) => {
    const [display, setDisplay] = useState<boolean>(false);

    useEffect(() => {
        setDisplay(true);
        const timeoutId = setTimeout(() => {
            setDisplay(false);
        }, 2000)

        return () => clearTimeout(timeoutId);
    }, [])
    return <>
        {
            !display ?
                null :
                <div className="confirm-window">
                    <p>{props.message}</p>
                </div>
        }
    </>
}