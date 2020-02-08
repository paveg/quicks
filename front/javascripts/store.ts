import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from './modules/root_state'
import logger from 'redux-logger'

export const setupStore = () => {
    const middleware = [...getDefaultMiddleware()]

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger)
    }

    return configureStore({
        reducer: rootReducer,
        middleware: middleware,

        devTools: true,
    })
}
