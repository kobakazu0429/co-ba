import * as React from "react";
import styled from "react-emotion";

const AboutCoBa = () => (
  <Wrapper>
    <Title>co-baとは</Title>
    <Description>
      <p>さまざまな人が、場所を共有したり、コミュニケーションによって</p>
      <p>お互いを共有しあったりすることができるシェアードワークプレイスです。</p>
      <p>もしかしたらその場から新しいモノを創りだしていくことができるかもしれません。</p>
      <p>そんなさまざまなことにチャレンジする場所「co-ba」は、東京を中心に全国にどんどん展開されています。</p>
    </Description>
  </Wrapper>
);

const Wrapper = styled.div`
  border: 1px solid gray;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.7rem;
  margin-bottom: 10px;
`;

const Description = styled.div`
  text-align: center;
`;

export default AboutCoBa;
