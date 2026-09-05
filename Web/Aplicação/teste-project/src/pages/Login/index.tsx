import eye_graph from '../../assets/eye_two_graph.svg'
import graph_head from '../../assets/graph_head.svg'

function App() {
  return (
    <>
    <div className="w-full min-h-screen max-w-3xl mx-auto p-6 flex-col bg-background">
        <div className='w-full flex justify-end'>
            <img src={graph_head} />
        </div>
            <div>
                <h1 className='text-4xl font-bold text-slate-800'>Login</h1>
                <div className='py-6'>
                    <div className='flex-col w-full'>
                        <h1>E-maiil</h1>
                        <input className='rounded-xl w-full h-7 bg-white' type="text" />
                    </div>
                    <div className='flex-col w-full py-4'>
                        <h1>Senha</h1>
                        <input className='rounded-xl w-full h-7 bg-white' type="text" />
                    </div>
                </div>
               <div className='py-10'>
                    <button className='rounded-xl w-full h-10 text-background bg-primary'>
                        Entrar
                    </button>
                </div>
            </div>
        <div className='fixed bottom-0 inset-s-0'>
            <img src={eye_graph} />
        </div>
    </div>
    </>
  )
}

export default App
