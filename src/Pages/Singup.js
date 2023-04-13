import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Notecontext from "../Context/Notecontext";

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    singup,
    name,
    setName,
    loading,

    verify,
  } = useContext(Notecontext);
  const [value, setValue] = useState("login");

  useEffect(() => {
    setEmail("");
    setPassword("");
    // eslint-disable-next-line
  }, [value]);

  return (
    <Wrapper>
      <div className="container">
        <div className="buttons">
          <button
            className={value === "login" ? "active" : ""}
            onClick={() => setValue("login")}
          >
            Login
          </button>
          <button
            className={value === "singup" ? "active" : ""}
            onClick={() => setValue("singup")}
          >
            Register
          </button>
          <span className={value === "login" ? "span log" : "span sing"}></span>
        </div>
        <div className="inputs">
          <div
            className={
              value === "singup" ? "logininputs translate" : "logininputs"
            }
          >
            <form onSubmit={verify} className="form">
              <h3>Welcome Back</h3>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>Password</span>
              </div>

              <button type="submit" className="btn btn-primary">
                {loading ? "Wait.." : "Login"}
              </button>
              <p>
                Not a user{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => setValue("singup")}
                >
                  Register
                </span>
              </p>
            </form>
          </div>
          <div
            className={
              value === "login"
                ? "singupinputs translatesingup"
                : "singupinputs"
            }
          >
            <form onSubmit={singup} className="form">
              <h3 style={{ textAlign: "center" }}>
                Explore The New Notes World
              </h3>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span>Name</span>
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>Password</span>
              </div>

              <button type="submit" className="btn btn-primary">
                {loading ? "Wait...." : "Sign Up"}
              </button>
              <p>
                Already a user{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => setValue("login")}
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  .container {
    width: 90%;
    padding: 30px;
    max-width: 600px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    height: 70%;
    /* min-height: 300px; */
    max-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background-color: #c9c5c5; */
    background-color: #ebebed;
    position: relative;
    /* border: 0.5px solid black; */
    border-radius: 7px;

    .span {
      position: absolute;
      left: 0%;
      width: 50%;
      height: 100%;
      background-color: #1b70fa;
      transition: 0.5s;

      border-radius: 7px;
    }
    .sing {
      transform: translateX(100%);
      transition: 0.5s;
      background-color: #5d39e3;
    }

    button {
      border: none;
      background-color: transparent;
      font-size: 17px;
      font-weight: bold;
      opacity: 40%;

      padding: 7px;
      width: 50%;
      height: 100%;
      z-index: 9;
      transition: 0.5s;
      border-radius: 7px;
      transition: 0.5s;
    }
    .active {
      background-color: transparent;
      opacity: 100%;

      color: white;
      transition: 0.5s;
    }
  }

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    input {
      width: 100%;
      max-width: 300px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      outline: none;
      background-color: #ebebed;

      /* border: 1px solid #1b70fa ;/ */
    }
  }

  .inputs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .logininputs {
      min-width: 100%;
      height: 100%;
      transform: translateX(50%);
      transition: 0.5s;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      div {
        width: 90%;
        max-width: 300px;

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        span {
          position: absolute;
          left: 0;
          padding: 10px;
          pointer-events: none;
          transition: 0.5s;
          color: #949292;
        }

        input {
          &:focus,
          &:valid {
            border: 1px solid #1b70fa;
          }

          &:focus ~ span,
          &:valid ~ span {
            transform: translateY(-25px);
            left: 10px;
            padding: 1px 10px;
            font-size: 13px;
            transition: 0.5s;
            border-radius: 5px;
            background-color: #ebebed;
            color: #1b70fa;
          }
        }
      }
    }
    .singupinputs {
      min-width: 100%;
      height: 100%;
      transform: translateX(-50%);
      transition: 0.5s;
      /* display: none; */
      .form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        div {
          width: 90%;
          max-width: 300px;

          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          span {
            position: absolute;
            left: 0;
            padding: 10px;
            pointer-events: none;
            transition: 0.5s;
            color: #949292;
          }

          input {
            &:focus,
            &:valid {
              border: 1px solid #1b70fa;
            }

            &:focus ~ span,
            &:valid ~ span {
              transform: translateY(-25px);
              left: 10px;
              padding: 1px 10px;
              font-size: 13px;
              transition: 0.5s;
              border-radius: 5px;
              background-color: #ebebed;
              color: #1b70fa;
            }
          }
        }
      }
    }
    .translate {
      transform: translateX(-100%);
      transition: 0.5s;
      /* display: none; */
    }
    .translatesingup {
      /* display: flex; */
      transform: translateX(100%);
      transition: 0.5s;
    }
  }
`;
