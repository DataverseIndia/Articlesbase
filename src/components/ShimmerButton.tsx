import { FC } from 'react';

interface ButtonProps {
  text: string;
}

const ShimmerButton: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="z-20 inline-flex animate-shimmer items-center justify-center rounded border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-2 font-polysans-slim text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {text}
    </button>
  );
};

export default ShimmerButton;
