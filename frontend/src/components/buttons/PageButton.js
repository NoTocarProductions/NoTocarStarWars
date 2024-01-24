import classes from "./PageButton.module.css";

export default function PageButton({ number, onClick, isActive }) {
  return (
    <>
      <button
        className={isActive ? classes.active : classes.pageButton}
        onClick={() => onClick(number)}
      >
        {number}
      </button>
    </>
  );
}
