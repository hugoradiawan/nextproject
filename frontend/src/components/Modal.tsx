import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

export function Modal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const navigate = useNavigate();
  function closeHandler(): void {
    navigate('/'); // .. and this one
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
