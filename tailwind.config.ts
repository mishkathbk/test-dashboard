import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";
const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }: any) => ({
      defaultScreens: ["20rem", "90rem"],
    }),
    extend: {
      colors: {
        grayBackground: "#F4F5FA",
        lightBlue: "#5570F1",
        lighterBlue: "#5570F114",
        lightGray: "#5E63661A",
        peach: "#FFCC9133",
        lightPeach: "#FEF5EA",
        lighterPeach: "#FFCC9129",
        peach4: "#FFF2E2",
        darkGray: "#53545C",
        grayText: "#45464E",
        tableGrayText: "#6E7079",
        lightGrayText: "#8B8D97",
        lighterGrayText: "#DBDEEE",
        darkBlueText: "#1C1D22",
        slight: "#F1F3F9",
        lightBlackText: "#2C2D33",
        lightRedText: "#CC5F5F",
        lightGreen: "#519C66",
        lighterGreen: "#32936F29",
        grayBorder: "#CFD3D4",
        gray5: "#666666",
        gray6: "#A6A8B1",
        gray7: "#EFF1F999",
        gray8: "#ABAFB1",
        gray9: "#BBC5CB",
        gray10: "#5570F11F",
      },
      fontSize: {
        "global-header1": ["1.25rem", "1.875rem"],
        "global-header2": ["0.875rem", "1.059rem"],
        "global-header3": ["0.75rem", "0.908rem"],
        "global-subheading": ["1rem", "1.21rem"],
        "global-button": ["0.688rem", "0.832rem"],
        "global-button2": ["0.625rem", "0.756rem"],
      },
    },
  },
  plugins: [fluid],
};
export default config;
