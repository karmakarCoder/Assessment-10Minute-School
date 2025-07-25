export default function Container({ children, className }) {
  return (
    <div className={`max-w-[1205px] mx-auto px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}
