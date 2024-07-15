import React, { useState } from 'react';
import Filmstrip from './components/Filmstrip';
import LargeImage from './components/LargeImage';
import './App.css';

const App = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    return (
        <div>
            <LargeImage template={selectedTemplate} />
            <Filmstrip onSelect={setSelectedTemplate} />
        </div>
    );
};

export default App;
