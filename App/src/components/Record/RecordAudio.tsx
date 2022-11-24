import React, { useState, useEffect } from 'react';

import '../../App.css';
import { AudioRecorder } from 'react-audio-voice-recorder';


export interface RecordAudioProps {
    ChangePage: (newPage: number) => void;
}

export const RecordAudio: React.FC<RecordAudioProps> = ({
    ChangePage
}) => {

    function addAudioElement(blob: Blob) {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
      }

    return (
    <>
        <button className='home-button' onClick={() => ChangePage(0)}>go home</button>
        <h1> Record Audio🎤</h1>
        <div className="RecordAudio">
            <AudioRecorder onRecordingComplete={addAudioElement} />
        </div>
    </>
    );
}
