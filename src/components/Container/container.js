import { StyleContainer } from "./container.css"

export default function Container({children, className}) {

    const combinedClassName = className ? `${StyleContainer} ${className}` : StyleContainer;

    return (
        <div className={combinedClassName}>{children}</div>
    )
}