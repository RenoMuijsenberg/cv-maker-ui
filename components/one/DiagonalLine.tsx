import styles from "../../styles/components/One/DiagonalLine.module.scss"
import classNames from "classnames";
export const DiagonalLine = ({reverse, absolute}: {reverse: boolean, absolute: boolean}) => {
	return (
		<div className={classNames(reverse ? styles.diagonalLineContainer : styles.diagonalLineContainerReverse, absolute ? styles.absolute : styles.relative)}>
			<div className={classNames(reverse ? styles.diagonalLine : styles.diagonalLineReverse, absolute ? styles.absolute : styles.relative)}></div>
		</div>
	)
}