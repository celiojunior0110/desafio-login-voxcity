import * as Styled from './styles'

export const Input = props => (
  <Styled.Input
    onChange={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
    type={props.type}
    className={props.className}
    name={props.name}
    required={props.required}
    pattern={props.pattern}
    title={props.title}
  />
)
