import {Col, Row} from "react-bootstrap";
import {useEffect} from "react";
import axios from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import {atomDate, atomEvents, atomSections} from "../../store/atoms";
import "./GridCol.css"
import ListSections from "../ListSections/ListSections";
import TimeVerticalView from "../TimeVerticalView/TimeVerticalView";
import SectionCol from "../SectionCol/SectionCol";

const GridCol = () => {
    const [sections, setSections] = useRecoilState(atomSections);
    const [events, setEvents] = useRecoilState(atomEvents);
    const date = useRecoilValue(atomDate);

    

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const response = await axios.post(
                    'https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.section.get',
                    {
                        type: 'company_calendar',
                        ownerId: ''
                    }
                );
                setSections(response.data.result);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        const fetchEvents = async () => {
            try {
                const response = await axios.post(
                    'https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.event.get',
                    {
                        type: 'company_calendar',
                        ownerId: '',
                        from: date.dateFrom,
                        to: date.dateTo,
                    }
                );
                setEvents(response.data.result);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }
        fetchSections();
        fetchEvents();
    }, [setEvents, setSections]);
    return <>
        <Row className={"cal-grid-row"} style={{flexWrap: "nowrap"}}>
            <Col className={"col-time"}><TimeVerticalView/></Col>
            <SectionCol/>
        </Row>
    </>
};

export default GridCol;