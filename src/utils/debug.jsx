import {useState} from 'react'
export var debug = { current: false }
export function setDebugMode(enabled) {
    if (enabled) {
        debug.current = true
    } else {
        debug.current = false
    }
    return debug.current
}