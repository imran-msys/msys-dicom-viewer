interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-5 ${className ? className : ""} `}>
      {children}
    </div>
  );
};

export default Container;
