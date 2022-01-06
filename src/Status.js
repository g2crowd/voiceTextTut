import React from "react";

export function Status({message}) {
    let messages = {
        "start": {
            msg: 'Click on the microphone icon and begin speaking.',
            class: 'alert-success'
        },
        "speak_now": {
            msg: 'Speak now.',
            class: 'alert-success'
        },
        "no_speech": {
            msg: 'No speech was detected. You may need to adjust your <a href="//support.google.com/chrome/answer/2693767" target="_blank">microphone settings</a>.',
            class: 'alert-danger'
        },
        "no_microphone": {
            msg: 'No microphone was found. Ensure that a microphone is installed and that <a href="//support.google.com/chrome/answer/2693767" target="_blank">microphone settings</a> are configured correctly.',
            class: 'alert-danger'
        },
        "allow": {
            msg: 'Click the "Allow" button above to enable your microphone.',
            class: 'alert-warning'
        },
        "denied": {
            msg: 'Permission to use microphone was denied.',
            class: 'alert-danger'
        },
        "blocked": {
            msg: 'Permission to use microphone is blocked. To change, go to chrome://settings/content/microphone',
            class: 'alert-danger'
        },
        "upgrade": {
            msg: 'Web Speech API is not supported by this browser. It is only supported by <a href="//www.google.com/chrome">Chrome</a> version 25 or later on desktop and Android mobile.',
            class: 'alert-danger'
        },
        "stop": {
            msg: 'Stop listening, click on the microphone icon to restart',
            class: 'alert-success'
        },
        "copy": {
            msg: 'Content copy to clipboard successfully.',
            class: 'alert-success'
        },
    }
    const display = messages[message]
    return (
        <div id="info" className={display.class}>{display.msg}</div>
    )
}