import Link from "next/link";
import { variantBtn } from "./style.css";

export default function BtnMain({children, url, variant, title}) {

    const buttonClassName = {
        white: variantBtn.white,
        lg: variantBtn.lg,
        default: variantBtn.default
    }[variant] || variantBtn.default;
    
    return (
        <Link className={buttonClassName} title={title} href={url}>{children}</Link>
    )
}