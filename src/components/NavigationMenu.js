import React, { useState } from 'react';

const NavigationMenu = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    return (
        <div>
            {/* Hamburger Icon */}
            <div className="md:hidden p-4">
                <button onClick={() => setIsMenuOpen( !isMenuOpen )}>
                    ☰
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`flex flex-col min-w-[220px] text-white p-4 space-y-4 h-full pt-10 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <a href="/editApps" className="block py-2 px-10 rounded-lg hover:bg-gray-700">
                    Manage Users
                </a>
                <a href="/editApps" className="block py-2 px-10 rounded-lg hover:bg-gray-700">
                    Edit Apps
                </a>
                <a href="/manageTags" className="block py-2 px-10 rounded-lg hover:bg-gray-700">
                    Manage Tags
                </a>
                <a href="/settings" className="block py-2 px-10 rounded-lg hover:bg-gray-700">
                    Settings
                </a>
                <a href="#" className="block py-2 px-10 rounded-lg hover:bg-gray-700">
                    Home
                </a>
            </div>
        </div>
    );
};

export default NavigationMenu;
