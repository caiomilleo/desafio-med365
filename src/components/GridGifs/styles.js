import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-flow: row wrap;
  height: calc(100vh - 270px);
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 4px;
      height: 100vh;
    }

    ::-webkit-scrollbar-track {
      box-shadow: transparent;
      border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background-color: black;
    }
`;
