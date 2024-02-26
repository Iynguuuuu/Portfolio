/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      'text-center',
      'text-white',
      'text-[28px]',
      'sm:text-[33px]',
      'md:text-[45px]',
      'font-bold',
      'uppercase',
      'relative',
      'mb-[2rem]',
      'font-semibold ',
      'text-white',
      'cursor-pointer',
      'text-[27px]',
      'w-fit ',
      'md:block',
      'after:block',
      'after:content-[] ',
      'after:absolute',
      'after:h-[3px]',
      'after:bg-yellow-400',
      'after:w-full',
      'after:scale-x-0',
      'after:hover:scale-x-100',
      'after:transition',
      'after:duration-300',
      'after:origin-center',
      'font-semibold',
      'relative ',
      'text-white',
      'cursor-pointer ',
      'text-[20px]',
      'w-fit',
      'md:block',
      'after:block',

      'after:absolute after:h-[3px]',
      'after:bg-yellow-400',
      ' after:w-full',
      'after:scale-x-0 ',
      'after:hover:scale-x-100 ',
      ' after:transition',
      'after:duration-300 ',
      'after:origin-center hidden',


    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
};