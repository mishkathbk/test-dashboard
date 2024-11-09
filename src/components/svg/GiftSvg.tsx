import * as React from "react"
import { SVGProps } from "react"
const GiftSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={24}
    // height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12v10H4V12M22 7H2v5h20V7ZM12 22V7M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7ZM12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z"
    />
  </svg>
)
export default GiftSvg
