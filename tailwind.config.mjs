/* eslint-disable import/no-extraneous-dependencies */
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

const isDevelopment =
  process.env.NODE_ENV !== 'production' || process.env.SB === '1';

const customColors = Object.keys(colors).reduce(
  (acc, key) => {
    // deprecated colors
    if (key === 'gray' || key.includes('Gray') || key === 'lightBlue') {
      return acc;
    }

    // @ts-ignore
    acc[key] = colors[key];

    return acc;
  },
  // replace gray with grey
  {grey: colors.neutral}
);

/** @type {TailwindConfig} */
export default {
  content:
    isDevelopment ?
      ['./app/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}',
        "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}", "./app/**/*.{html,js,ts,jsx,tsx}", "app/**/*.{html,js,ts,jsx,tsx}", "components/**/*.{html,js,ts,jsx,tsx}"

      ]
    : ['./app/**/*!(.stories).{ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: customColors,
    container: {
      center: true,
    },
    extend: {
      colors: {
        doreturn: {
          gold: "#C5B358",
          grey: "#808080",
        },
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        // border: {
        //   primary: "var(--border-primary)",
        //   "primary-hover": "var(--border-primary-hover)",
        // },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ['Source Code Pro', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        sm: '390px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [aspectRatioPlugin, containerQueries, forms, typography, require("tailwindcss-animate")],

};
