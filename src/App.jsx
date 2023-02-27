import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home from './pages/Home'
import Lessons from './pages/Lessons'
import Materials from './pages/Materials'
import Variants from './pages/Variants'
import Support from './pages/Support'
import NotFound from './pages/NotFound'
function App() {
    const numberPage = () => {
        switch (window.location.pathname.split('/')[1]) {
            case '':
                return 1
            case 'lessons':
                return 2
            case 'materials':
                return 3
            case 'variants':
                return 4
            case 'support':
                return 5
            default:
                return 1
        }
    }
    const [activeSidebarBtn, setActiveSidebarBtn] = React.useState(numberPage())
    const [isOverlayActive, setIsOverlayActive] = React.useState(false)
    const changePage = (id) => {
        setActiveSidebarBtn(id)
        setIsOverlayActive(false)
    }

    return (
        <div className='container'>
            <nav className='nav'>
                <img src='../../img/icon.svg' alt='Логотип' className='logo-img' />
                <p className='nav-title'>ИнфаСто</p>
            </nav>
            <main className='main'>
                <div className={`overlay ${isOverlayActive && 'overlayVisible'}`}></div>
                <aside className='sidebar'>
                    <Link
                        to='/'
                        className={`btn ${activeSidebarBtn === 1 ? 'btn_active' : ''}`}
                        onClick={() => changePage(1)}
                        id='about'
                    >
                        <svg
                            className='svg-logo'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            strokeLinejoin='round'
                            strokeMiterlimit='2'
                        >
                            <path d='M8.42 3.085l-5 4.665a2.316 2.316 0 00-.737 1.694v6.389A2.317 2.317 0 005 18.15h10a2.317 2.317 0 002.317-2.317V9.444c0-.642-.267-1.256-.737-1.694l-5-4.665c-.89-.83-2.27-.83-3.16 0zm.886.951a1.017 1.017 0 011.387 0l5 4.665c.207.192.324.461.324.743v6.389c0 .562-.456 1.017-1.017 1.017H5a1.017 1.017 0 01-1.017-1.017V9.444c0-.282.117-.551.323-.743l5-4.665zM5.833 15.65h8.334a.65.65 0 000-1.3H5.833a.65.65 0 000 1.3z'></path>
                        </svg>
                        <span>Информация</span>
                    </Link>
                    <Link
                        to='/lessons/1'
                        className={`btn ${activeSidebarBtn === 2 ? 'btn_active' : ''}`}
                        onClick={() => changePage(2)}
                        id='lessons'
                    >
                        <svg
                            className='svg-logo'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M1 11.3153V12.9784V13.5044C1 15.0508 2.2536 16.3044 3.8 16.3044H15.2C16.7464 16.3044 18 15.0508 18 13.5044V5.80009C18 4.25369 16.7464 3.00009 15.2 3.00009H3.8C2.2536 3.00009 1 4.25369 1 5.80009V6.32618V7.98922'
                                stroke='#242F3F'
                                strokeWidth='1.3'
                                strokeLinecap='round'
                            ></path>
                            <path
                                d='M11.5789 9.11668C11.9522 9.36456 11.9472 9.90364 11.5695 10.145L8.63056 12.0227C8.20779 12.2928 7.64754 11.9935 7.65207 11.4999L7.68698 7.69333C7.69151 7.19978 8.25715 6.91034 8.6749 7.18781L11.5789 9.11668Z'
                                stroke='#242F3F'
                                strokeWidth='1.3'
                            ></path>
                        </svg>
                        <span>Подготовка</span>
                    </Link>
                    <Link
                        to='/materials'
                        className={`btn ${activeSidebarBtn === 3 ? 'btn_active' : ''}`}
                        onClick={() => changePage(3)}
                        id='materials'
                    >
                        <svg
                            className='svg-logo'
                            width='20'
                            height='18'
                            viewBox='0 0 20 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M4.99992 7.16671V7.81671H5.64992V7.16671H4.99992ZM14.9999 7.16671H14.3499V7.81671H14.9999V7.16671ZM5.62492 15.3167C5.9839 15.3167 6.27492 15.0257 6.27492 14.6667C6.27492 14.3077 5.9839 14.0167 5.62492 14.0167V15.3167ZM14.3749 14.0167C14.0159 14.0167 13.7249 14.3077 13.7249 14.6667C13.7249 15.0257 14.0159 15.3167 14.3749 15.3167V14.0167ZM9.34992 17.1667C9.34992 17.5257 9.64093 17.8167 9.99992 17.8167C10.3589 17.8167 10.6499 17.5257 10.6499 17.1667H9.34992ZM9.99992 9.66671L10.4595 9.20709C10.2057 8.95325 9.79414 8.95325 9.5403 9.20709L9.99992 9.66671ZM7.0403 11.7071C6.78646 11.9609 6.78646 12.3725 7.0403 12.6263C7.29414 12.8802 7.7057 12.8802 7.95954 12.6263L7.0403 11.7071ZM12.0403 12.6263C12.2941 12.8802 12.7057 12.8802 12.9595 12.6263C13.2134 12.3725 13.2134 11.9609 12.9595 11.7071L12.0403 12.6263ZM4.58325 14.0167C2.87117 14.0167 1.48325 12.6288 1.48325 10.9167H0.183252C0.183252 13.3468 2.1532 15.3167 4.58325 15.3167V14.0167ZM18.5166 10.9167C18.5166 12.6288 17.1287 14.0167 15.4166 14.0167V15.3167C17.8466 15.3167 19.8166 13.3468 19.8166 10.9167H18.5166ZM15.4166 7.81671C17.1287 7.81671 18.5166 9.20462 18.5166 10.9167H19.8166C19.8166 8.48665 17.8466 6.51671 15.4166 6.51671V7.81671ZM4.58325 6.51671C2.1532 6.51671 0.183252 8.48665 0.183252 10.9167H1.48325C1.48325 9.20462 2.87117 7.81671 4.58325 7.81671V6.51671ZM9.99992 1.98337C12.4024 1.98337 14.3499 3.93094 14.3499 6.33337H15.6499C15.6499 3.21297 13.1203 0.683374 9.99992 0.683374V1.98337ZM9.99992 0.683374C6.87951 0.683374 4.34992 3.21297 4.34992 6.33337H5.64992C5.64992 3.93094 7.59748 1.98337 9.99992 1.98337V0.683374ZM5.64992 7.16671V6.33337H4.34992V7.16671H5.64992ZM4.58325 7.81671H4.99992V6.51671H4.58325V7.81671ZM14.9999 7.81671H15.4166V6.51671H14.9999V7.81671ZM14.3499 6.33337V7.16671H15.6499V6.33337H14.3499ZM5.62492 14.0167H4.58325V15.3167H5.62492V14.0167ZM15.4166 14.0167H14.3749V15.3167H15.4166V14.0167ZM10.6499 17.1667L10.6499 9.66671L9.34992 9.66671L9.34992 17.1667H10.6499ZM9.5403 9.20709L7.0403 11.7071L7.95954 12.6263L10.4595 10.1263L9.5403 9.20709ZM9.5403 10.1263L12.0403 12.6263L12.9595 11.7071L10.4595 9.20709L9.5403 10.1263Z'
                                fill='#000000'
                            ></path>
                        </svg>
                        <span>Материалы</span>
                    </Link>
                    <Link
                        to='/variants'
                        className={`btn ${activeSidebarBtn === 4 ? 'btn_active' : ''}`}
                        onClick={() => changePage(4)}
                        id='variants'
                    >
                        <svg
                            className='svg-logo'
                            width='18'
                            height='18'
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M17 11V13V14.2C17 15.7464 15.7464 17 14.2 17H3.8C2.2536 17 1 15.7464 1 14.2V3.8C1 2.2536 2.2536 1 3.8 1H14.2C15.7464 1 17 2.2536 17 3.8V5V7'
                                stroke='#242F3F'
                                strokeWidth='1.3'
                                strokeLinecap='round'
                            ></path>
                            <path
                                d='M6 9L7.89474 11L12 7'
                                stroke='#242F3F'
                                strokeWidth='1.3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            ></path>
                        </svg>
                        <span>Пробники</span>
                    </Link>
                    <Link
                        to='/support'
                        className={`btn ${activeSidebarBtn === 5 ? 'btn_active' : ''}`}
                        onClick={() => changePage(5)}
                        id='support'
                    >
                        <svg
                            className='svg-logo'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M4.53377 12.6007V12.6007C3.56002 12.7874 2.61926 12.1494 2.43254 11.1756L1.57501 6.70347C1.2838 5.18474 2.27845 3.71757 3.79718 3.42635C4.34698 3.32093 4.93962 3.20729 5.53588 3.09296M15.7553 4.39061C15.7216 4.21472 15.6878 4.03853 15.6544 3.8645C15.3826 2.44665 14.0774 1.46757 12.6441 1.64046C11.5263 1.77529 10.2205 1.95066 9.12636 2.14656'
                                stroke='#242F3F'
                                strokeWidth='1.3'
                                strokeLinecap='round'
                            ></path>
                            <path
                                d='M18.9999 8.42999V7.41252C18.9999 6.05522 18.1128 4.87209 16.7559 4.83935C15.2938 4.80407 13.2554 4.83936 11.8189 4.83936H7.15082C5.76272 4.83936 4.63782 5.96463 4.63782 7.35273V13.8157C4.63782 14.8072 5.44159 15.611 6.43308 15.611H6.65082C7.02632 15.611 7.33072 15.9154 7.33072 16.2908V16.2908C7.33072 17.0311 7.39319 18.1261 8.13311 18.1054C8.63509 18.0913 8.81452 17.4777 9.08752 17.0562L9.13684 16.98C9.6898 16.1263 10.6377 15.611 11.6548 15.611H16.4866C17.8747 15.611 18.9999 14.4859 18.9999 13.0978V12.0205'
                                stroke='#242F3F'
                                strokeWidth='1.3'
                                strokeLinecap='round'
                            ></path>
                            <circle
                                cx='8.22796'
                                cy='10.2253'
                                r='0.65'
                                fill='#292D32'
                                stroke='#242F3F'
                                strokeWidth='0.495267'
                            ></circle>
                            <circle
                                cx='11.8194'
                                cy='10.2253'
                                r='0.65'
                                fill='#292D32'
                                stroke='#242F3F'
                                strokeWidth='0.495267'
                            ></circle>
                            <circle
                                cx='15.4097'
                                cy='10.2253'
                                r='0.65'
                                fill='#292D32'
                                stroke='#242F3F'
                                strokeWidth='0.495267'
                            ></circle>
                        </svg>
                        <span>Техподдержка</span>
                    </Link>
                </aside>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route
                        path='/lessons/:lessonId'
                        element={
                            <Lessons
                                isOverlayActive={isOverlayActive}
                                setIsOverlayActive={setIsOverlayActive}
                            ></Lessons>
                        }
                    ></Route>
                    <Route path='/materials' element={<Materials></Materials>}></Route>
                    <Route path='/variants' element={<Variants></Variants>}></Route>
                    <Route path='/support' element={<Support></Support>}></Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <footer className='footer'></footer>
        </div>
    )
}

export default App
