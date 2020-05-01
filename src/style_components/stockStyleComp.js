import styled from 'styled-components';

export const HrLine = styled.hr`
    margin: 35px 0 35px;
    border: 6px solid white;
    width: 100%;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.15);
`;

export const NotFnd = styled.h3`
font-size: 22px;
margin-top: 45px;
text-align: center;
font-weight: normal;
`;

export const BorderDiv = styled.div`
    border-bottom: 1px dashed #E0E0E0;
    &:nth-last-child(2) {
        border-bottom: none;
      }
`;

export const AccountContainer = styled.div`
    width: 760px;
    margin: 0 auto;;
    min-height: 420px;
    position: relative;
    padding-top: 5px;
`;

export const StockContainer = styled.div`
    width: 760px;
    margin: 0 auto;
    min-height: 530px;
    padding-top: 35px;
    position: relative;
`;
export const AignCenterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const AlignPaginator = styled.div`
display: flex;
width: 100%;
justify-content: center;
position: absolute;
`;
