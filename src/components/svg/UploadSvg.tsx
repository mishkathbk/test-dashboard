import * as React from "react"
import { SVGProps } from "react"
const UploadSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={20}
    // height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M13.333 13.333 10 10l-3.333 3.333M10 10v7.5" />
      <path d="M16.992 15.325A4.168 4.168 0 0 0 15 7.5h-1.05A6.667 6.667 0 1 0 2.5 13.583" />
      <path d="M13.333 13.333 10 10l-3.333 3.333" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default UploadSvg
