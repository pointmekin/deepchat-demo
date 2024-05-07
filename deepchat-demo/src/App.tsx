import './App.css'
import { DeepChat } from 'deep-chat-react'
function App() {
  const initialMessages = [
    { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'I am doing very well!' },
  ]

  return (
    <>
      <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        initialMessages={initialMessages}
        request={{
          url: 'http://localhost:3000/generate',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }}
      />
    </>
  )
}

export default App
