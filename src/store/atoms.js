import {atom} from "recoil";

export const atomLoading = atom({
    key: 'loading',
    default: true,
});

export const atomDate = atom({
    key: 'date',
    default: {
        dateFrom: new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear(),
        dateTo: new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()
    }
});

export const atomEvents = atom({
    key: 'events',
    default: []
});

export const atomSections = atom({
    key: 'sections',
    default: []
})