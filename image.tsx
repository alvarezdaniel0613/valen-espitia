import type { ImgHTMLAttributes } from "react";
export default function Image({unoptimized, ...props}: ImgHTMLAttributes<HTMLImageElement> & {unoptimized?:boolean}) { return <img {...props}/>; }
