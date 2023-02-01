interface ActionProp {
  href: string;
  className: string;
  innerText: string;
}

const Action = ({ href, className, innerText }: ActionProp): JSX.Element => {
  return (
    <a href={href} className={className}>
      {innerText}
    </a>
  );
};

export default Action;
