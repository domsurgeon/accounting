import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
text-align: center;
font-family: Helvetica, sans serif;

h2{
  font-weight: 500;

  span{
    font-weight: 700;
  }
}
a{
  display: block;
  margin: 15px auto;
  cursor: pointer;
}
ul{
  padding: 0;
  margin: 0;
}
li {
  padding: 0;
  margin: 0;
  list-style-type: none;

  div{
    display: none;
    width: 300px;
    margin: auto;
    text-align: left;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #e9e9e9;

    p{
      span{
        font-weight: 700;
      }
    }
  }

  &.expand{
    div{
      display: block;
    } 
  }

  &.credit{
    a{
      color: green;
    }
  }

  &.debit{
    a{
      color: red;
    }
  }
}
`

const Ledger = ({ balance, operations }) => {
  const [expand, setExpand] = useState(null)

  return (
  <Container>
    <h1>Account Ledger</h1>
    <h2>Balance: <span>$ { balance }</span></h2>
    <h2>Operations:</h2>
    <ul>
    {
      operations.map( (op,i) => (
      <li key={i} className={ `${op.type} ${expand===i?'expand':''}` }>
        <a onClick={ () => setExpand( expand !== i && i )  }>
          { op.type } { op.amount }
        </a>
        <div>
          <p>Date: <span>{ new Date(op.date).toString().split(' ').slice(1,5).join(' ') }</span></p>
          <p>Item: <span>{ op.item }</span></p>
          <p>Place: <span>{ op.place }</span></p>
        </div>
      </li>
      ) )
    }
    </ul>
  </Container>
  )
}

export default Ledger
