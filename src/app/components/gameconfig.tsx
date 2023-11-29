import React, { useState } from "react";

const GameConfig = ({onGameStart}: {onGameStart: Function}) => {
    const [selectedPattern, setSelectedPattern] = useState('');

    const handlePatternChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPattern(event.target.value);
    };

    const handleStartClick = () => {
        onGameStart(selectedPattern);
    };

    return (
        <div className="flex flex-col items-center">
            <h4 data-cy-pattern-title className="font-bold">Pattern</h4>
            <div data-cy-radiobuttons className="flex flex-col items-left">
                <label>
                    <input 
                        type="radio" 
                        name="pattern" 
                        value="Random" 
                        data-cy-radiobutton-pattern="Random" 
                        onChange={handlePatternChange} 
                    /> Random
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="pattern" 
                        value="Glider" 
                        data-cy-radiobutton-pattern="Glider" 
                        onChange={handlePatternChange} 
                    /> Glider
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="pattern" 
                        value="Blinker" 
                        data-cy-radiobutton-pattern="Blinker" 
                        onChange={handlePatternChange} 
                    /> Blinker
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="pattern" 
                        value="Beehive" 
                        data-cy-radiobutton-pattern="Beehive" 
                        onChange={handlePatternChange} 
                    /> Beehive
                </label>
            </div>
            <button 
                data-cy-start-button 
                className="border border-gray-400 rounded-sm p-1"
                onClick={handleStartClick}
            >
                Start
            </button>
        </div>
    );
};

export default GameConfig;
