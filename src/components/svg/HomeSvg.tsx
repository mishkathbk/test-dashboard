import * as React from "react"
import { SVGProps } from "react"
const HomeSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#5570F1"
      d="M6.096 13.855V11.81c0-.518.421-.939.943-.942h1.916c.524 0 .95.422.95.942v2.039c0 .45.364.814.817.818h1.307A2.307 2.307 0 0 0 13.66 14c.431-.429.674-1.01.674-1.616V6.577c0-.49-.218-.954-.597-1.268l-4.44-3.526a2.077 2.077 0 0 0-2.639.047L2.311 5.31a1.65 1.65 0 0 0-.644 1.268v5.802a2.296 2.296 0 0 0 2.304 2.288h1.277a.821.821 0 0 0 .582-.236.81.81 0 0 0 .242-.576h.024Z"
    />
  </svg>
)
export default HomeSvg
