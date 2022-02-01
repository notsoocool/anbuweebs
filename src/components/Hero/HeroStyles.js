import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const Bigc = styled.img`
  height: 47%;
  width: 47%;
  margin: 0 2.5%;
  margin-top: -0.5%;
  }
`;
export const Animeage = styled.img`
  position: fixed;
  width: 50%;
  margin: -5%;
  margin-top: 15%;
  }
`;
export const Animeage2 = styled.img`
  position: fixed;
  width: 50%;
  margin: -52%;
  margin-top: -15%;
  -webkit-transform:rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
`;
/* export const Main = styled.div`
  margin-bottom: 2%;
}
`; */
