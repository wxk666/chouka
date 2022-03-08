import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
import {useState} from "react";
import 御鞋盒1 from "./asset/img.png"
import 御鞋盒2 from "./asset/img_1.png"
import 珍鞋盒1 from "./asset/img_2.png"
import 珍鞋盒2 from "./asset/img_3.png"
let rand = function (detail) {
    let arr = []
    detail.forEach((item, i) =>{
        for(let j = 0; j<item[2]; j++){
            arr.push(i)
        }
    })
    console.log(arr)
    let random = Math.floor(Math.random() * arr.length)
    return detail[arr[random]]
};
// const chouItem = (detail)=>{
//     let item = rand(detail)
//     let random2 = Math.floor(Math.random() * item.length)
//     return item[random2]
// }
const chou = (detail,secondSelect, n)=>{
    let index = detail.findIndex(a => {return a.name === secondSelect})
    let result = []
    for(let i = 0; i< n ; i++){
        result.push(rand(detail[index].item))
    }
    return result
}
const textResult = (result) =>{
    let  obj = {}
    result.forEach(item =>{
        if(!obj[item[0]]){
            obj[item[0]] = 0
        }
        obj[item[0]]++
    })
    let arr = []
    Object.keys(obj).forEach(item =>{
        arr.push(item + "*" + obj[item])
    })
    return arr.join(",")
}
function App() {
    const [poolSelect, setPoolSelect] = useState(null)
    const [secondPoolSelect, setSecondPoolSelect] = useState("未选择")
    const [number, setNumber] = useState(0)
    const [result, setResult] = useState([])
    const pool = [
        {
            name:"抽食魂"
        },
        {
            name:"开盒子"
        },
        {
            name:"赌部件"
        },
    ]
    const poolDetail = {
        "开盒子":[
            {
                name:"御鞋盒",
                item: [["御鞋盒1",御鞋盒1,5],["御鞋盒2",御鞋盒2,95]]
            },
            {
                name:"珍鞋盒",
                item: [["珍鞋盒1",珍鞋盒1,5],["珍鞋盒2",珍鞋盒2,95]]
            }
        ]
    }
  return (
    <div className="App">
        <div className={"main-container"}>
            <div className={"pool-line"}>
                {
                    pool.map(item =>{
                        return(
                            <div className={"pool"} key={item.name} onClick={()=>{
                                if(poolDetail[item.name]){
                                    setPoolSelect(item.name)
                                }
                                else {
                                    setPoolSelect(null)
                                    setSecondPoolSelect("未选择")
                                }
                            }}>{item.name}</div>
                        )
                    })
                }
            </div>
            <div className={"pool-line"}>
                {
                    poolSelect && poolDetail[poolSelect].map(item =>{
                        return(
                            <div style={{textAlign:"center"}}>
                                <div className={"pool"} key={item.name} onClick={()=>{
                                    setSecondPoolSelect(item.name)
                                }}/>
                                <div style={{color: "red",fontSize:24, marginTop:10}}>{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div>当前池子: <span style={{color: "red"}}>{secondPoolSelect}</span></div>
            <div style={{display:"flex", alignItems:"center"}}>
                请输入抽奖次数:
                <Input style={{display:"flex", width:200}} type="text" onChange={e =>{
                    setNumber(e.target.value)
                }}/>
                <Button style={{marginLeft: 10}} disabled={result.length > 0} onClick={()=>{
                    if(number > 50){
                        alert("请输入小于等于50的次数")
                        return false
                    }
                    else if(number < 0 || isNaN(Number(number)) || number.toString().indexOf(".") > -1){
                        alert("请输入正整数")
                        return false
                    }
                    else if(!poolDetail[poolSelect]){
                        alert("请选择池子")
                        return false
                    }
                    else{
                        setResult(chou(poolDetail[poolSelect],secondPoolSelect, number))
                    }
                }}>抽奖</Button>
            </div>
            {
                result.length > 0 &&
                <div>
                    <div>抽奖结果:</div>
                    <div className="img-container">
                        {
                            result.map((item,i) =>{
                                return(
                                    <img key={i} src={item[1]} alt=""/>
                                )
                            })
                        }
                    </div>
                    <div>本次获得: {textResult(result)}</div>
                    <div className={"btn-line"} style={{marginTop:20, textAlign:"center"}}>
                        <Button type={"primary"} onClick={()=>{
                            setResult([])
                        }
                        }>继续抽奖</Button>
                        <Button type={"primary"} style={{marginLeft: 10}}>历史结果</Button>
                    </div>
                </div>
            }
        </div>
    </div>
  );
}

export default App;
