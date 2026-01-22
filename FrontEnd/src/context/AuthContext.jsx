import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for stored auth on mount
        const storedUser = localStorage.getItem('pronote_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                localStorage.removeItem('pronote_user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password, role = 'stagiaire') => {
        // Simulated login - ready for Sanctum integration
        const mockUser = {
            id: 1,
            name: role === 'admin' ? 'Admin User' : role === 'formateur' ? 'Prof. Jean Dupont' : 'Alex Johnson',
            email: email,
            role: role,
            avatar: null,
        };

        setUser(mockUser);
        localStorage.setItem('pronote_user', JSON.stringify(mockUser));
        localStorage.setItem('pronote_token', 'mock_token_123');
        return mockUser;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('pronote_user');
        localStorage.removeItem('pronote_token');
    };

    const isAuthenticated = () => {
        return !!user;
    };

    const hasRole = (role) => {
        return user?.role === role;
    };

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated,
        hasRole,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
