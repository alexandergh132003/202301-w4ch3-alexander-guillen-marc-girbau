interface ActionProp {
  href: string;
  className: string;
  innerText: string;
  anchorOnClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const Action = ({
  href,
  className,
  innerText,
  anchorOnClick,
}: ActionProp): JSX.Element => {
  return (
    <a href={href} className={className} onClick={anchorOnClick}>
      {innerText}
    </a>
  );
};

export default Action;
