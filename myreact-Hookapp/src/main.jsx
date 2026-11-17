import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickCounter from './Counter.jsx'
import EmojiCounter from './EmojeeCounters.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClickCounter/>
  <EmojiCounter pic='Love'/> 
  <EmojiCounter pic='sad'/> 
  <EmojiCounter pic='like'/> 
  </StrictMode>,
)
 