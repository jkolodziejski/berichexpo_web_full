import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
`;

export const NormalRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  ${(props: { fullHeight?: boolean }) =>
    props.fullHeight
      ? css`
          height: 100%;
        `
      : ""}
`;

export const RowSpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NormalColumn = styled.div`
  ${(props: { fullHeight?: boolean }) =>
    props.fullHeight
      ? css`
          height: 100%;
        `
      : ""}
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 3.375rem;
  line-height: auto;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const H2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 3rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const H3 = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const H4 = styled.h4`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const RegularP = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
  ${(props: { breakWord?: boolean }) =>
    props.breakWord
      ? css`
          word-wrap: break-word;
          word-break: break-word;
        `
      : ""}
`;

export const MediumP = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const BoldP = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const SmallP = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1.125rem;
  letter-spacing: 0.2px;
  color: #19233f;
  display: flex;
  align-items: center;
`;

export const InfoP = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1.125rem;
  letter-spacing: 0.2px;
  color: #afafaf;
`;

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 10px;
  background: #2ea944;
  border-radius: 8px;
  width: max-content;
  border: 1px solid #2ea944;
  transition: all 0.4s;
  * {
    color: white !important;
    transition: all 0.4s;
  }
  &:hover {
    background: transparent;
    * {
      color: #2ea944 !important;
    }
  }
`;
