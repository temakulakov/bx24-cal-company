import {atom} from 'recoil';
export const rangeArrayEvents = atom({
    key: 'rangeArrayEvents',
    default: []
});

export const dateRange = atom({
    key: 'dateRange',
    default: {
        dateFrom: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
        dateTo: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    }
});

export const loadCal = atom({
    key: 'loadCal',
    default: true
})

export const accessEdit = atom({
    key: 'accessEdit',
    default: false
});

export const selectedEvent = atom({
    key: 'selectedEvent',
    default: false
});

export const openedSelector = atom({
    key: "openedSelector",
    data: false
});

export const openedModal = atom({
    key: "openedModal",
    data: false
});

export const sectionsArray = atom({
    key: "sectionsArray",
    data: []
});

export const reports = atom({
    key: "reports",
    data: false
})


