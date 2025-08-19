import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-6 bg-transparent border-t">
            <div className="container mx-auto text-center text-sm text-foreground/60">
                <p>&copy; {currentYear} Abhishek Yadav. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
