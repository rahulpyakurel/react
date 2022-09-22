import React from 'react'

const Prop = (props) => {
    const{language,technology} = props
    // object destructuring
    // const language = props.language
    // const technology = props.technology   
  return (
    <>
        <h2>We are learning {language} It is used for {technology}.</h2>
    </>
  )
}

export default Prop