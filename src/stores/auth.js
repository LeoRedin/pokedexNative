import createStore from 'zustand';
import persist from '../utils/persist';

const useAuthStore = createStore(
  persist(
    {
      key: 'auth',
      allowlist: ['isAuthenticated'],
    },
    (set) => ({
      isAuthenticated: false,
      login: async (username, password) => {
        set((state) => ({
          isAuthenticated: true,
        }));
      },
      logout: () => set({isAuthenticated: false}),
    }),
  ),
);

export default useAuthStore;
