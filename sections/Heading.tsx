interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
}

export default function Heading({ title }: Props) {
  return title ? <h2>{title}</h2> : null;
}