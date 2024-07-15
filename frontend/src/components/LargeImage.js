import React from 'react';

const LargeImage = ({ template }) => {
    const base_url="http://localhost:5000";

    if (!template) return <div>Select a template to view details</div>;

    return (
        <div>
            <img src={`${base_url}/images/large/${template.imageFileName}`} alt={template.description} />
            <div>
                <p>ID: {template.id}</p>
                <p>Cost: {template.cost}</p>
                <p>Description: {template.description}</p>
            </div>
        </div>
    );
};

export default LargeImage;
