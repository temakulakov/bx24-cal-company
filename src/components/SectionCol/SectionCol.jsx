import "./SectionCol.css";
import {useRecoilValue} from "recoil";
import {atomSections} from "../../store/atoms";
import {Col, Row} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
const SectionCol = () => {
    const sections = useRecoilValue(atomSections);
    return <>
        {sections.map((section) => <Col className={"section-col"} key={uuidv4()}>
            <div className={"section-title"}>{section['NAME']}</div>
        </Col>)}
    </>
}

export default SectionCol;