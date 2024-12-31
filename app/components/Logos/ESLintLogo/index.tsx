import type {FC, SVGProps} from 'react';

type ESLintLogoProps = (
  | {height?: never; width?: number}
  | {height?: number; width?: never}
) &
  Omit<SVGProps<SVGSVGElement>, 'height' | 'width'>;

const ESLintLogo: FC<ESLintLogoProps> = ({
  className,
  height,
  width,
  ...props
}) => {
  const adjustedWidth =
    height ? height * (323.999_73 / 285.096_01) : (width ?? 323.999_73);
  const adjustedHeight =
    width ? width * (285.096_01 / 323.999_73) : (height ?? 285.096_01);

  return (
    <svg
      height={adjustedHeight}
      viewBox="0 0 323.99971 285.09601"
      width={adjustedWidth}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(1.2548929 0 0 1.2548929 -22.9868 -19.949332)">
        <path
          d="m97.021 99.016l48.432-27.962c1.212-.7 2.706-.7 3.918 0l48.433 27.962c1.211.7 1.959 1.993 1.959 3.393v55.924c0 1.399-.748 2.693-1.959 3.394l-48.433 27.962c-1.212.7-2.706.7-3.918 0l-48.432-27.962c-1.212-.7-1.959-1.994-1.959-3.394v-55.924c.001-1.4.748-2.693 1.959-3.393"
          fill="#8080F2"
        />
        <path
          d="m273.336 124.488l-57.867-100.672c-2.102-3.64-5.985-6.325-10.188-6.325h-115.736c-4.204 0-8.088 2.685-10.19 6.325l-57.867 100.45c-2.102 3.641-2.102 8.236 0 11.877l57.867 99.847c2.102 3.64 5.986 5.501 10.19 5.501h115.735c4.203 0 8.087-1.805 10.188-5.446l57.867-100.01c2.104-3.639 2.104-7.907.001-11.547m-47.917 48.41c0 1.48-.891 2.849-2.174 3.59l-73.71 42.527c-1.282.74-2.888.74-4.17 0l-73.767-42.527c-1.282-.741-2.179-2.109-2.179-3.59v-85.055c0-1.481.884-2.849 2.167-3.59l73.707-42.527c1.282-.741 2.886-.741 4.168 0l73.772 42.527c1.283.741 2.186 2.109 2.186 3.59z"
          fill="#4b32c3"
        />
      </g>
    </svg>
  );
};

export default ESLintLogo;