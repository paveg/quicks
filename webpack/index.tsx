import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../front/javascripts/root/index/entry'
import { Provider } from 'react-redux'
import { setupStore } from '../front/javascripts/store'

const store = setupStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
