import eye_graph from '../../assets/eye_two_graph.svg'
import graph_head from '../../assets/graph_head.svg'

function App() {
  return (
    <>
        <div className='w-full flex justify-end'>
            <img className="al-" src={graph_head} />
        </div>
        <div className="w-full h-100 max-w-3xl mx-auto p-6 flex-col">
            <div>
                <h1 className='text-4xl font-bold text-slate-800'>Login</h1>
                <div className='flex-col w-full'>
                    <h1>E-maiil</h1>
                    <input className='w-46 bg-red-200' type="text" />
                </div>
                    
                <div className='flex-col w-full'>
                    <h1>Senha</h1>
                    <input className='w-46 bg-red-200' type="text" />
                </div>
               
                <button className='w-32 text-black bg-blue-600'>
                    Entrar
                </button>
            </div>
        </div>
        <div className='fixed bottom-0 start-0'>
            <img src={eye_graph} />
        </div>
    </>
  )
}

export default App
