import React from 'react';

const Thumbnail = ({ template, onClick }) => {
    const base_url="http://localhost:5000";
     
    return (
        <img
            className="thumbnail"
            src={`${base_url}/images/thumbnails/${template.thumbnailFileName}`}
            alt={template.description}
            onClick={onClick}
        />
    );
};

export default Thumbnail;
