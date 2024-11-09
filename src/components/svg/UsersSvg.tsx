import * as React from "react"
import { SVGProps } from "react"
const UsersSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={24}
    // height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#53545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.592 15.207c3.688 0 6.841.559 6.841 2.792 0 2.233-3.131 2.808-6.841 2.808-3.69 0-6.842-.554-6.842-2.788s3.13-2.812 6.842-2.812ZM9.592 12.02a4.386 4.386 0 1 1 4.385-4.385 4.37 4.37 0 0 1-4.354 4.385h-.031Z"
      clipRule="evenodd"
    />
    <path
      stroke="#53545C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.483 10.882A3.301 3.301 0 0 0 19.32 7.62a3.3 3.3 0 0 0-2.762-3.256M18.596 14.732c1.55.231 2.634.775 2.634 1.895 0 .771-.51 1.271-1.335 1.584"
    />
  </svg>
)
export default UsersSvg
