import React from 'react'
import { One } from '../components/sections/one/one.jsx'
import { Two } from '../components/sections/two/two.jsx'
import { Three } from '../components/sections/three/three.jsx'
import { Four } from '../components/sections/four/four.jsx'
import { Five } from '../components/sections/five/five.jsx'
import { Six } from '../components/sections/six/six.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Seven } from '../components/sections/seven/seven.jsx'
import { List } from '../components/list/list.jsx'


export function App() {
    return(
        <div>
            <One/>
            <Two/>
            <List/>
            <Three/>
            <Four/>
            <Five/>
            <Six/>
            <Seven/>
        </div>
    )
}