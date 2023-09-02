export const HeaderPaint = ({title}) => {
  let write;
  if (title !== 'undefined') {
    write = <h2 className="title">{title}</h2>
  }
  return write
} 