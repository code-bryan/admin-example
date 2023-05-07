type Props = {
  text?: string;
}

export default function BaseDivider({ text }: Props) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-xs text-gray-400">{text}</span>
      </div>
    </div>
  );
}