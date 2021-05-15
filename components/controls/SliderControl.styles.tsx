import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px;
    width: 708px;
    height: 220px;
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48px;
`

export const Title = styled.div`
    font-size: 48px;
`

export const Scale = styled.div`
    display: flex;
    width: 531px;
    font-size: 38px;
    color: #000000;
    justify-content: space-between;
`

export const NumberWrapper = styled.div`
    width: 44px;
    text-align: center;
`

export const Input = styled.input`
    width: 530px;
    background-color: transparent;
    -webkit-appearance: none;
  
    &:focus {
      outline: none;
    }
  
    &::-webkit-slider-runnable-track {
      background: #fdd207;
      border: 0;
      border-radius: 15px;
      width: 100%;
      height: 23px;
      cursor: pointer;
    }
  
    &::-webkit-slider-thumb {
      margin-top: -10px;
      width: 44px;
      height: 44px;
      background: #0e0c0b;
      border: 13px solid #fdd207;
      border-radius: 44px;
      cursor: pointer;
      -webkit-appearance: none;
    }
  
    &::-moz-range-track {
      background: #fdd207;
      border: 0;
      border-radius: 23px;
      width: 100%;
      height: 23px;
      cursor: pointer;
    }
  
    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      background: #0e0c0b;
      border: 13px solid #fdd207;
      border-radius: 44px;
      cursor: pointer;
  }
`
