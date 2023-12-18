import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios";
import {useRecoilState} from "recoil";
import {dateRange, loadCal} from "./store";

function App() {
  const [loading, setLoading] = useRecoilState(loadCal);
  const [date, setDate] = useRecoilState(dateRange);

    useEffect(() => {
        axios.post("https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.event.get/", {
            'type': 'company_calendar',
            'ownerId': '',
            from: date.dateFrom,
            to: date.dateTo,
        }).then((resp) => {
          const unicalIDSelections = [];
          resp.data.result.map((elementEvent, indexEvent) => {
            if(!unicalIDSelections.includes(elementEvent['SECTION_ID'])) {
              unicalIDSelections.push(elementEvent['SECTION_ID']);  //  Получение номеров ID секций календаря "company" (Филиалов)
            }
          });
          setLoading(false);
        }).catch((e) => {
            console.log(e);
        });
    }, []);
    return (
        <div className="App">
            <div style={{width: "400px", height: "200px", background: "red"}}></div>
        </div>
    );
}

export default App;
