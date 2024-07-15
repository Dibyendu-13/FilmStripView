import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail';

const Filmstrip = ({ onSelect }) => {

    const base_url="http://localhost:5000";
    const [templates, setTemplates] = useState([]);
    const [start, setStart] = useState(0);

    useEffect(() => {
        axios.get(`${base_url}/api/templates`)
            .then(response => setTemplates(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const next = () => {
        setStart(start + 4);
    };

    const previous = () => {
        setStart(start - 4);
    };

    return (
        <div className="filmstrip">
            <button onClick={previous} disabled={start === 0}>
                <img src="/images/previous.png" alt="Previous" />
            </button>
            {templates.slice(start, start + 4).map(template => (
                <Thumbnail key={template.id} template={template} onClick={() => onSelect(template)} />
            ))}
            <button onClick={next} disabled={start + 4 >= templates.length}>
                <img src="/images/next.png" alt="Next" />
            </button>
        </div>
    );
};

export default Filmstrip;
