import axios from "axios";
import {URL_KEY} from "../store/consts";

export const getItems = async () => {
    try {
        return await axios.post(URL_KEY + "calendar.section.get?type=company_calendar&ownerId" );
    } catch (e) {
        console.error(e)
    }
}



export const loadSections = async () => {
    try {
        return await axios.post(URL_KEY + "calendar.section.get", {
            type: 'company_calendar',
            ownerId: '',
        });
    } catch (e) {
        console.error(e);
    }
}