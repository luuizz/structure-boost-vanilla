import Link from "next/link";
import { variantBtn } from "./style.css";

export default function BtnMain({label, url, title, variant}) {

    const buttonClassName = variant === "white" ? variantBtn.white : (variant === "lg" ? variantBtn.lg : variantBtn.default);

    return (
        <Link className={buttonClassName} href={url} title={title}>{label}</Link>
    )
}