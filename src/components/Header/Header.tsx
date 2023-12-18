import { BsSun, BsFillMoonFill} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { toggleTheme } from '../../features/theme/themeSlice';
const Header = () => {

    const { darkTheme } = useAppSelector((state) =>state);

    const dispatch = useAppDispatch();
    
    return ( 
        <header
            className="mb-20"
        >
            <nav
                className="
                    border-b
                    border-gray-200
                    border-opacity-100
                    py-2.5
                "
            >
                <div
                    className="
                        flex
                        flex-wrap
                        justify-between
                        items-center
                        mx-auto
                        max-w-screen-xl
                    "
                >
                    <a 
                        href="#"
                        className="flex items-center"
                    >
                        <span
                            className="
                                self-center
                                text-2xl
                                font-semibold
                                whitespace-nowrap
                            "
                        >
                            Movies
                        </span>
                    </a>
                    <div
                        className="flex items-center lg:order-2 gap-3"
                    >
                        {darkTheme ? (
                            <BsSun 
                                onClick={() => dispatch(toggleTheme())} 
                                className='
                                    hover: opacity-50
                                    cursor-pointer
                                ' 
                                size={20} 
                            />

                        ) : (
                            <BsFillMoonFill 
                                onClick={() => dispatch(toggleTheme())} 
                                className='
                                    hover:opacity-50
                                    cursor-pointer
                                '
                                size={20}
                            />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;
