import styled from 'styled-components';

export const Heading = styled.header`
    text-align: center;
    font-size: 30px;
    padding: 15px;
`;

export const ItemDiv = styled.div`
    width: 100%
`;

export const UnorderedList = styled.ul`
    list-style-type: none;
    margin: 1% 20%;
`;

export const ListedItem = styled.li`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #89ec26;
`;

export const Image = styled.img`
    margin-right: 15px;
    border-radius: 50%;
`

export const TitleButton = styled.button`
    font-size: 17px;
    font-weight: 400;
    padding-left: 0;
    margin-bottom: 0;
    text-align: left;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
`;

export const SummaryParagraph = styled.p`
    padding-right: 5px;
`;

export const Section = styled.section`
    display: flex;
`;


export const HeadingTwoAuthor = styled.h2`
    font-size: 16px;
    font-weight: 400;
`;

export const HeadingTwoDate = styled.h2`
    font-size: 16px;
    font-weight: 400;
    margin-left: auto;
    order: 2;
`;

export const Button = styled.button`
    padding-top: 2%;
    padding-left: 20px;
    color: red;
    font-size: 16px;
    font-weight: bold;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
`;

export const NewsSection = styled.div`
    border: 1px solid #E0CA3C;
    padding: 5px;
    margin: auto;
    display: inline-block;
`;