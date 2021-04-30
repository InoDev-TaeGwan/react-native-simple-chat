import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  align-self: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.Image`
  background-color: ${({ theme }) => theme.imageBackground};
  width: 100px;
  height: 100px;
  border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
  // 사용자의 사진을 원형으로 렌더링하기 위해 Image 컴포넌트에서 props를 통해 전달되는 값에 따라 이미지가 원형으로 렌더링되도록 함.
`;

const Image = ({ url, imageStyle, rounded }) => {
  return (
    <Container>
      <StyledImage source={{ uri: url }} style={imageStyle} rounded={rounded} />
    </Container>
  );
};

Image.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
  rounded: PropTypes.bool,
};

export default Image;
