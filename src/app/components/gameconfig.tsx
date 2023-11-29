import React from "react";

const GameConfig = () => (
    <div className="flex flex-col items-center">
        <h4 data-cy-pattern-title className="font-bold">Pattern</h4>
        <div data-cy-checkboxes className="flex flex-col items-left">
            <label><input type="checkbox" data-cy-checkbox-pattern="Random" /> Random</label>
            <label><input type="checkbox" data-cy-checkbox-pattern="Glider" /> Glider</label>
            <label><input type="checkbox" data-cy-checkbox-pattern="Blinker" /> Blinker</label>
            <label><input type="checkbox" data-cy-checkbox-pattern="Beehive" /> Beehive</label>
        </div>
        <button data-cy-start-button className="border border-gray-400 rounded-sm p-1">
        Start
        </button>
    </div>
    );

    export default GameConfig;