import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Filmes',
        path: '/movies',
        icon: <AiIcons.AiFillVideoCamera />,
        cName: 'nav-text'
    },
    {
        title: 'Séries',
        path: '/series',
        icon: <AiIcons.AiFillVideoCamera />,
        cName: 'nav-text'
    },
    {
        title: 'Nossos planos',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Contatos',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Suporte',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]
