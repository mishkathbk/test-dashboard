import * as React from "react"
import { SVGProps } from "react"
const FilterSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="#53545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.667 2.5H1.333l5.334 6.307v4.36L9.333 14.5V8.807L14.667 2.5Z"
    />
  </svg>
)
export default FilterSvg
