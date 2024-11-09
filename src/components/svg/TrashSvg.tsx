import * as React from "react"
import { SVGProps } from "react"
const TrashSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.104 7.89s-.452 5.613-.715 7.977c-.125 1.129-.822 1.79-1.965 1.811-2.174.04-4.35.042-6.524-.004-1.1-.022-1.785-.692-1.908-1.801-.264-2.385-.714-7.983-.714-7.983M17.257 5.2H3.125M14.534 5.2a1.373 1.373 0 0 1-1.346-1.104l-.203-1.013a1.066 1.066 0 0 0-1.03-.79H8.427c-.482 0-.906.323-1.03.79l-.203 1.013A1.373 1.373 0 0 1 5.848 5.2"
    />
  </svg>
)
export default TrashSvg
