import "./ListSections.css";
import {useRecoilValue} from "recoil";
import {atomSections} from "../../store/atoms";
const ListSections = () => {
    const sectionList = useRecoilValue(atomSections);

    return <div>
        {sectionList.map(section => {
            return <div>{section['NAME']}</div>
        })}
    </div>
};

export default ListSections;