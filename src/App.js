import axios from 'axios'
import React,{useState}from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Quiz from './components/quiz/Quiz'
import Result from './components/result/Result'


const App = ()=> {

    const [name, setName] = useState("")
    const [questions, setQuestions] = useState()
    const [score, setScore] = useState(0)

    const fetchQuestions = async(category="", difficulty="")=>{
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
          }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
          setQuestions(data.results)
    };

    

    return (
        <BrowserRouter>
        <div className='app'>
            <Header /> 

            <Switch>

                <Route path='/' exact>
                    <Home 
                        name={name} 
                        setName={setName} 
                        fetchQuestions={fetchQuestions}
                    />
                </Route>

                <Route path='/quiz' exact>
                    <Quiz 
                        name={name}
                        questions={questions}
                        score={score}
                        setScore={setScore}
                    />
                </Route>

                <Route path='/result' exact>
                    <Result name={name} score={score}/>
                </Route>
            </Switch>
        </div>
        <Footer />
        </BrowserRouter>
    )
}

export default App

