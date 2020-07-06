import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: 'question 1'},
                    {text: 'question 2'},
                    {text: 'question 3'},
                    {text: 'question 4'},
                ]
            }
        ]
    }


    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                    />
                </div>

            </div>
        )
    }
}