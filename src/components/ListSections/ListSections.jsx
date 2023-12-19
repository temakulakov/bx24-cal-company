import "./ListSections.css";
import {useRecoilValue} from "recoil";
import {atomSections} from "../../store/atoms";
import { v4 as uuidv4 } from 'uuid';
const ListSections = () => {
    const sectionList = useRecoilValue(atomSections);

    return <div className={"filial-container"}>
        {sectionList.map(section => {
            return <div className={"filial-element"} key={uuidv4()}>{section['NAME']}</div>
        })}
    </div>
};

export default ListSections;