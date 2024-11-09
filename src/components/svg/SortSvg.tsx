import * as React from "react"
import { SVGProps } from "react"
const SortSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#00092E"
      d="M14 5.167H2a.504.504 0 0 1-.5-.5c0-.274.227-.5.5-.5h12c.273 0 .5.226.5.5 0 .273-.227.5-.5.5ZM12 8.5H4a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h8c.273 0 .5.227.5.5s-.227.5-.5.5ZM9.333 11.833H6.667a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h2.666c.274 0 .5.227.5.5 0 .274-.226.5-.5.5Z"
    />
  </svg>
)
export default SortSvg
