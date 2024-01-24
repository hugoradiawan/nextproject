import classes from "./Modal.module.css";

export function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
