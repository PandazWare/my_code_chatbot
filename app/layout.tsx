// This is the main layout component for the application
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <header>
                <h1>My Chatbot Application</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2026 My Chatbot Application</p>
            </footer>
        </div>
    );
};

export default Layout;
