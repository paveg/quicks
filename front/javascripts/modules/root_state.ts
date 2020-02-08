import counterModule from './counter_module'

export const rootReducer = {
    counter: counterModule.reducer,
}
