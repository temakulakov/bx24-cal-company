import React, { useEffect } from 'react';
import axios from 'axios';
import {useRecoilValue} from 'recoil';
import {atomDate, atomEvents, atomSections} from "./store/atoms";
import {Col, Container, Row} from "react-bootstrap"; // Предполагается, что у вас есть атом с именем dataState
import "./App.css";
import GridCol from "./components/GridCol/GridCol";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";

const YourComponent = () => {
    const events = useRecoilValue(atomEvents);
    return (
        <>
            {events ? (
                    <Container>
                        <Row className={"root-title"}>   {/*Заголовок*/}
                            <SkeletonLoader/>
                        </Row>
                        <Row className={"root-controls"}>   {/*Меню контроля*/}
                            <SkeletonLoader/>
                        </Row>
                        <Row className={"root-grid"}>   {/*Сетка календаря*/}
                            <GridCol/>
                        </Row>
                    </Container>
            ) : (
                <Container>
                    <Row>   {/*Заголовок*/}

                    </Row>
                    <Row>   {/*Меню контроля*/}

                    </Row>
                    <Row>   {/*Меню контроля*/}

                    </Row>
                    <Row>   {/*Сетка календаря*/}

                    </Row>
                </Container>
            )}
        </>
    );
};

export default YourComponent;