import { GitHubLogo } from '../assets/github';
import { MoonLogo } from '../assets/moon';
import { SunLogo } from '../assets/sun';
import './header.css';
import { useTheme } from '../../../features/hooks/use-theme';
import { ZapLogo } from '../assets/zap';

export const HeaderComponent = () => {
    const { theme, setTheme } = useTheme();
    const isSun = theme === "light";

    const handleThemeToggle = () => {
        setTheme(isSun ? "dark" : "light");
    };

    return (
        <header className='header'>
            <div className="header-wrapper">
                <div className='left-container'>
                    <a className='home-ref' href="/">
                        <div className="left-container__logo">
                            <ZapLogo/> api helper
                        </div>
                    </a>
                </div>
                <div className='right-container'>
                    <div 
                        className="right-container__theme-button" 
                        onClick={handleThemeToggle}
                    >
                        {isSun ? <SunLogo /> : <MoonLogo />}
                    </div>
                        <a className="right-container__git-button" href="https://github.com/risunya/T1LastTask" target='_blank'>
                                <GitHubLogo/>
                        </a>
                    </div>
            </div>
        </header>
    );
}
