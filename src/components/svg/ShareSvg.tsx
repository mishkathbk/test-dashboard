import * as React from "react"
import { SVGProps } from "react"
const ShareSvg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.555 5.95 6.739 9.806 2.4 7.092c-.621-.39-.492-1.334.211-1.54l10.304-3.017a.85.85 0 0 1 1.05 1.06L10.915 13.89a.846.846 0 0 1-1.533.206l-2.645-4.29"
    />
  </svg>
)
export default ShareSvg
