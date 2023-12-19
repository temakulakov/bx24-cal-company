import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimeCol = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(
                    'https://intranet.gctm.ru/rest/1552/jx5itnlnk81dxcol/calendar.section.get',
                    {
                        type: "company_calendar",
                        ownerId: ""
                        // Данные для отправки (если требуется)
                        // Например:
                        // key: 'value',
                    }
                );
                setData(response.data.result);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Загрузка данных...</p>
            )}
        </div>
    );
};

export default TimeCol;