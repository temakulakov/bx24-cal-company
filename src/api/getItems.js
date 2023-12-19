import axios from "axios";
import {URL_KEY} from "../store/consts";

export const getItems = async (dateFrom, dateTo) => {
        await axios.post(URL_KEY + "calendar.event.get", {
            type: 'company_calendar',
            ownerId: '',
            from: dateFrom,
            to: dateTo,
        }).then((resp) => {
            // console.log(resp)
            return resp;
        }).catch((e) => {
            console.log("dateFrom");
            console.log(dateFrom);
            console.log(e);
            return null;
        });
}

export const loadSections = async () => {
    try {
        const res = await axios.post(URL_KEY + "calendar.section.get", {
            type: 'company_calendar',
            ownerId: '',
        }).then((resp) => {
            // console.log(resp)
            return resp;
        }).catch((e) => {
            console.log(e);
            return null;
        });
        return res;
    } catch (e) {
        console.error(e);
    }
}