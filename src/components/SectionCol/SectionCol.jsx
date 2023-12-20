import "./SectionCol.css";
import {useRecoilValue} from "recoil";
import {atomSections} from "../../store/atoms";
import {Col, Row} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import {useRef} from "react";
const SectionCol = () => {
    const sections = useRecoilValue(atomSections);

    const containerRef = useRef(null);

    const handleScroll = (e) => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({
                top: 0, // Оставляем элемент в верхней части родителя
                left: e.target.scrollLeft, // Прокручиваем элемент по горизонтали вместе с родителем
                behavior: 'smooth', // Добавляем плавную анимацию прокрутки
            });
        }
    };

    return <>
        {sections.map((section) => <Col className={"section-col"} key={uuidv4()} onScroll={handleScroll} ref={containerRef}>
            <div className={"section-title"}>{section['NAME']}</div>
        </Col>)}
    </>
}

export default SectionCol;