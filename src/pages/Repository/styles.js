import styled from 'styled-components';

export const Loading = styled.div`
  color: #c7c7c7;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #03a9f4;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #adadad;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  /* padding-top: 30px; */
  margin-top: 30px;
  /* border-top: 1px solid rgba(255, 255, 255, 0.1); */
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    /* border: 1px solid #c7c7c7; */
    border-radius: 4px;
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
      2px 2px 6px rgba(0, 0, 0, 0.8);

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
        2px 2px 6px rgba(0, 0, 0, 0.8);
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #c7c7c7;
          line-height: 24px;

          &:hover {
            color: #03a9f4;
          }
        }

        span {
          height: 20px;
          background: #03a9f4;
          color: white;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #adadad;
      }
    }
  }
`;
