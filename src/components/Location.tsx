import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>디토레스토랑 오시는 길</Title>
        <p>주소: 서울특별시 서초구 명달로 94 (주)삼성출판사 사옥</p>
      </Divider>
      <Image src="./assets/LocationMap.png" />
      <Title>주차안내</Title>
      <p>주차 요금 무료</p>
      <p>삼성출판사사옥 지하1,2층 무료주차가능</p>
      <p>(병원과 편의점 사이 골목에 입구가 있습니다)</p>
    </Wrapper>
  );
}
