import {Col} from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return <>
        <Col>
            <div className={"reload-events"}>Обновить сетку событий</div>
        </Col>
        <Col>
            <div className={"day-switcher"}>Переключатель дней</div>
        </Col>
        <Col>
            <div className={"day-shower"}>Выбранная дата</div>
        </Col>
    </>
}

export default Header;