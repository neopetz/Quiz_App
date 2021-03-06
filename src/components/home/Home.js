import React,{useState} from 'react'
import './Home.css'
import banner from '../../image/banner.png'
import { Button, MenuItem, TextField } from '@material-ui/core'
import Categories from '../../data/Categories'
import { useHistory } from 'react-router'
import ErrorMessage from '../errorMessage/ErrorMessage'

const Home = ({name,setName,fetchQuestions}) => {      

const [category, setCategory] = useState("")
const [difficulty, setDiffiiculty] = useState("")
const [error, setError] = useState(false)
const history = useHistory()

const handleSubmit = ()=>{
    if(!category || !difficulty || !name){
        setError(true)
        return;
    }else{
        setError(false)
        fetchQuestions(category,difficulty)
        history.push('/quiz')
    }   
}

    return (
        <div className='content'>
            <div className='settings'>
                <span className='titleQuiz'>Quiz Settings</span>
                <div className='settings_select'>
                    {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
                    <TextField 
                        label="Enter Your Name" 
                        variant="outlined" 
                        style={{marginBottom:25}}
                        onChange={(e)=>setName(e.target.value)}
                    />

                    <TextField 
                        select 
                        label='Select Category' 
                        variant='outlined' 
                        style={{marginBottom:25}}
                        onChange={(e)=>setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map((cat)=>(
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }

                    </TextField>

                    <TextField 
                        select 
                        label='Select Difficulty' 
                        variant='outlined' 
                        style={{marginBottom:25}}
                        onChange={(e)=>setDiffiiculty(e.target.value)}
                        value={difficulty}
                    >

                        <MenuItem key='Easy' value='easy'>
                            Easy
                        </MenuItem>
                        <MenuItem key='Medium' value='medium'>
                            Medium
                        </MenuItem>
                        <MenuItem key='Hard' value='hard'>
                            Hard
                        </MenuItem>

                    </TextField>
                    <Button 
                        variant='contained' 
                        color='primary' 
                        size='large'
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src={banner} className='banner' alt='banner'/>
        </div>
    )
}

export default Home
