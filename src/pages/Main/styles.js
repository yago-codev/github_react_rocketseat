import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #131419;
  border-radius: 4px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    height: 50px;
    background: #131419;
    border: none;
    outline: none;
    border-radius: 40px;
    padding: 5px 15px;
    color: #03a9f4;
    font-size: 18px;
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
      inset 2px 2px 6px rgba(0, 0, 0, 0.8);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #131419;
  margin-left: 15px;
  border-radius: 50%;
  border: none;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.8);

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    margin-right: 0;
    fill: #c7c7c7;
  }

  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
      inset 2px 2px 6px rgba(0, 0, 0, 0.8);

    svg {
      fill: #006c9c;
      margin-right: 0;
    }
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
