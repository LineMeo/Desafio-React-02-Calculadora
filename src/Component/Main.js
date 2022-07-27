import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: #540b0e;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid #9e2a2b;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: #335c67;
  font-size: 35px;
  border-bottom: solid;
`;

const Valo = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Valor = styled.input`
  border: solid #e09f3e;
  height: 20px;
`;

const Contas = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 350px;
  height: 50px;
`;

const Botao = styled.button`
  cursor: pointer;
  width: 60px;
  background-color: #fff3b0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Resu = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Main extends Component {
  state = {
    valor1: "",
    valor2: "",
    result: ""
  };

  handleChange = (event) => {
    this.setState({
      valor1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      valor2: Number(event.target.value)
    });
  };

  Soma = () => {
    const { valor1, valor2 } = this.state;
    this.setState({
      result: valor1 + valor2,
      valor1: "",
      valor2: ""
    });
  };

  Menos = () => {
    const { valor1, valor2 } = this.state;
    this.setState({
      result: valor1 - valor2,
      valor1: "",
      valor2: ""
    });
  };

  Multi = () => {
    const { valor1, valor2 } = this.state;
    this.setState({
      result: valor1 * valor2,
      valor1: "",
      valor2: ""
    });
  };

  Divi = () => {
    const { valor1, valor2 } = this.state;
    this.setState({
      result: valor1 / valor2,
      valor1: "",
      valor2: ""
    });
  };

  Clear = () => {
    const { valor1, valor2 } = this.state;
    this.setState({
      result: "",
      valor1: "",
      valor2: ""
    });
  };

  render() {
    return (
      <Container>
        <Title>Calculadora</Title>
        <Valo>
          <Valor value={this.state.valor1} onChange={this.handleChange} />
          <Valor value={this.state.valor2} onChange={this.handleChange2} />
        </Valo>
        <Contas>
          <Botao onClick={this.Soma}>+</Botao>
          <Botao onClick={this.Menos}>-</Botao>
          <Botao onClick={this.Multi}>*</Botao>
          <Botao onClick={this.Divi}>/</Botao>
          <Botao onClick={this.Clear}>Clear</Botao>
        </Contas>
        <Resu>
          <p>O resultado é:</p>
          <p>{this.state.result}</p>
        </Resu>
      </Container>
    );
  }
}
