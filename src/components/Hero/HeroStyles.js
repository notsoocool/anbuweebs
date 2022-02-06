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
export const Name = styled.a`
  position: absolute;
  margin-top: 15%;
  font-size: 6rem;
  font-weight: bold;
}
`;
export const Des = styled.a`
  position: absolute;
  margin-top: 20%;
  font-size: 3rem;
  color: #1473E7;
}
`;
export const Rec = styled.img`
  position: fixed;
  width: 27%;
  margin: 12%;
  margin-top: 38%;

`;
/* export const Main = styled.div`
  margin-bottom: 2%;
}
`; */
