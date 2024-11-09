import * as React from "react"
import { SVGProps } from "react"
const CalenderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={16}
    // height={17}
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <path
      stroke="#53545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.062 6.77h11.882M10.961 9.373h.006M8.003 9.373h.006M5.039 9.373h.006M10.961 11.964h.006M8.003 11.964h.006M5.039 11.964h.006M10.696 1.833v2.194M5.31 1.833v2.194"
    />
    <path
      stroke="#53545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.825 2.886H5.181C3.223 2.886 2 3.976 2 5.981v6.034c0 2.036 1.223 3.152 3.18 3.152h5.64c1.963 0 3.18-1.097 3.18-3.102V5.981c.006-2.004-1.21-3.095-3.175-3.095Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CalenderSvg
