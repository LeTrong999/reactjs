import React from 'react';

import Content from './component/Content';
import About from './component/About';
import Contact from './component/Contact';
import Todolist from "./page/Todolist";



const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <Content />
    },
    { 
        path: '/about',
        exact: true,
        main: () => <About />
    },
    { 
        path: '/contact',
        exact: true,
        main: () => <Contact />
    },
    { 
        path: '/content',
        exact: true,
        main: () => <Content />
    },
    {
        path: '/todolist',
        exact: true,
        main: () => <Todolist />
    }
]

export default routes;