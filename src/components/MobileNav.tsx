import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden="true"
            />

            {/* Menu */}
            <div
                ref={menuRef}
                role="dialog"
                aria-label="Mobile navigation menu"
                aria-modal="true"
                className={`fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-lg z-50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="text-xl font-semibold text-gray-900">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    to="/"
                                    onClick={onClose}
                                    className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={onClose}
                                    className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onClose();
                                        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={onClose}
                                    className="block px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}