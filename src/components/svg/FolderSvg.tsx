import * as React from "react"
import { SVGProps } from "react"
const FolderSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M16.884 5.115h-2.943a2.43 2.43 0 0 1-1.894-.887l-.969-1.34A2.367 2.367 0 0 0 9.193 2h-2.08C3.378 2 2 4.192 2 7.92v4.028c-.005.443 19.996.443 19.997 0v-1.17c.018-3.728-1.325-5.662-5.113-5.662Z"
      opacity={0.4}
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20.832 6.543c.32.375.567.805.73 1.27.318.954.465 1.957.435 2.963v5.253a9.344 9.344 0 0 1-.098 1.322 5.99 5.99 0 0 1-.8 2.183 4.433 4.433 0 0 1-.676.887 6 6 0 0 1-4.366 1.571H7.931a6.026 6.026 0 0 1-4.375-1.57 4.434 4.434 0 0 1-.667-.888 5.831 5.831 0 0 1-.782-2.183A8.2 8.2 0 0 1 2 16.03v-5.253c0-.439.024-.877.071-1.313.01-.077.025-.152.04-.226.025-.125.049-.247.049-.369.09-.526.255-1.037.49-1.517.693-1.482 2.115-2.236 4.445-2.236h9.78c1.305-.101 2.6.292 3.628 1.1.119.1.229.21.33.328ZM6.97 15.541h10.083a.828.828 0 0 0 .863-.799.744.744 0 0 0-.178-.532.783.783 0 0 0-.622-.32H6.97a.826.826 0 1 0 0 1.651Z"
      clipRule="evenodd"
    />
  </svg>
)
export default FolderSvg
