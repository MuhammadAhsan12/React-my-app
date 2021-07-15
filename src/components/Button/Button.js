import './Button.css';

const STYLE = [
    'btn--primary',
    'btn--outline'
]

const SYZE = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSyze
}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[1]

    const checkButtonSyze = STYLE.includes(buttonSyze) ? buttonSyze : SYZE[0]

    return (
        <button className = {`btn ${checkButtonStyle} ${checkButtonSyze}`} onClick = {onClick} type = {type}>
            {children}
        </button>
    )
}