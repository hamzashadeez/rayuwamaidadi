import React from "react";
import styled from "styled-components";

function about() {
  return (
    <About>
      <div style={{ color: "#009688" }}>
        <Intro>Number #1 Podcast in Arewa</Intro>
        <p>
          Shirin dayake gabatarmaku da hanyoyin da zaku kasance a cikin rayuwa
          mai dadi, muna sakin sabon Episodes a kalla guda biyu a sati,{" "}
        </p>
          <p>
          Zaka iya saurara kai tsaye kuma zaka iya saukewa (downloading) a
          wayarka a matsayin MP3

          </p>

        <p>Kasance tare da zamu, Kasance cikin rayuwa mai dadi!</p>
      </div>
    </About>
  );
}

export default about;

const About = styled.div`
  /* background-color: red; */
`;

const Intro = styled.h4`
    color: #111111 !important;
`;
