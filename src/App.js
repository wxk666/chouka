import logo from './logo.svg';
import './App.css';
import { Modal,Button, Input } from 'antd';
import {useEffect, useState} from "react";
import bg from "./asset/bg.png"
import jiu_main from "./asset/jiu_main.png"
import shao_main from "./asset/shao_main.png"
import cheng_main from "./asset/cheng_main.png"
import yu_main from "./asset/yu_main.png"
import zhen_main from "./asset/zhen_main.png"
import image001 from "./asset/yu/image001.jpg"
import image002 from "./asset/yu/image002.jpg"
import image003 from "./asset/yu/image003.jpg"
import image004 from "./asset/yu/image004.jpg"
import image005 from "./asset/yu/image005.jpg"
import image006 from "./asset/yu/image006.jpg"
import image007 from "./asset/yu/image007.jpg"
import image008 from "./asset/yu/image008.jpg"
import image009 from "./asset/yu/image009.jpg"
import image010 from "./asset/yu/image010.jpg"
import image011 from "./asset/yu/image011.jpg"
import image012 from "./asset/yu/image012.jpg"
import image013 from "./asset/yu/image013.jpg"
import image014 from "./asset/yu/image014.jpg"
import image015 from "./asset/yu/image015.png"
import image016 from "./asset/yu/image016.jpg"
import image017 from "./asset/yu/image017.jpg"
import image018 from "./asset/yu/image018.png"
import image019 from "./asset/yu/image019.jpg"
import image020 from "./asset/yu/image020.jpg"
import image021 from "./asset/yu/image021.jpg"
import image022 from "./asset/yu/image022.jpg"
import image023 from "./asset/yu/image023.jpg"
import image024 from "./asset/yu/image024.jpg"
import image025 from "./asset/yu/image025.jpg"
import image026 from "./asset/yu/image026.jpg"
import image027 from "./asset/yu/image027.jpg"
import image028 from "./asset/yu/image028.jpg"
import image029 from "./asset/yu/image029.jpg"
import image030 from "./asset/yu/image030.jpg"
import image031 from "./asset/yu/image031.jpg"
import image032 from "./asset/yu/image032.jpg"
import image033 from "./asset/yu/image033.png"
import image035 from "./asset/yu/image035.jpg"
import image036 from "./asset/yu/image036.jpg"
import image037 from "./asset/yu/image037.jpg"
import image038 from "./asset/yu/image038.jpg"
import image039 from "./asset/yu/image039.jpg"
import image040 from "./asset/yu/image040.jpg"
import image041 from "./asset/yu/image041.jpg"
import image042 from "./asset/yu/image042.jpg"
import image043 from "./asset/yu/image043.jpg"
import image044 from "./asset/yu/image044.jpg"
import image045 from "./asset/yu/image045.jpg"
import image047 from "./asset/yu/image047.png"
import image048 from "./asset/yu/image048.png"
import image049 from "./asset/yu/image049.png"
import image050 from "./asset/yu/image050.png"
import image051 from "./asset/yu/image051.png"
import image052 from "./asset/yu/image052.png"
import image053 from "./asset/yu/image053.png"
import image054 from "./asset/yu/image054.png"
import image055 from "./asset/yu/image055.png"
import image056 from "./asset/yu/image056.png"
import image057 from "./asset/yu/image057.png"
import image058 from "./asset/yu/image058.png"
import image059 from "./asset/yu/image059.png"
import zhen_image001 from "./asset/zhen/image001.jpg"
import zhen_image002 from "./asset/zhen/image002.jpg"
import zhen_image003 from "./asset/zhen/image003.jpg"
import zhen_image004 from "./asset/zhen/image004.jpg"
import zhen_image005 from "./asset/zhen/image005.jpg"
import zhen_image006 from "./asset/zhen/image006.jpg"
import zhen_image007 from "./asset/zhen/image007.jpg"
import zhen_image008 from "./asset/zhen/image008.jpg"
import zhen_image009 from "./asset/zhen/image009.jpg"
import zhen_image010 from "./asset/zhen/image010.jpg"
import zhen_image011 from "./asset/zhen/image011.jpg"
import zhen_image012 from "./asset/zhen/image012.png"
import zhen_image013 from "./asset/zhen/image013.jpg"
import zhen_image014 from "./asset/zhen/image014.jpg"
import zhen_image015 from "./asset/zhen/image015.jpg"
import zhen_image016 from "./asset/zhen/image016.jpg"
import zhen_image017 from "./asset/zhen/image017.jpg"
import zhen_image018 from "./asset/zhen/image018.png"
import zhen_image019 from "./asset/zhen/image019.jpg"
import zhen_image020 from "./asset/zhen/image020.png"
import zhen_image021 from "./asset/zhen/image021.jpg"
import zhen_image022 from "./asset/zhen/image022.jpg"
import zhen_image023 from "./asset/zhen/image023.jpg"
import zhen_image024 from "./asset/zhen/image024.png"
import zhen_image025 from "./asset/zhen/image025.jpg"
import zhen_image026 from "./asset/zhen/image026.jpg"
import zhen_image027 from "./asset/zhen/image027.jpg"
import zhen_image028 from "./asset/zhen/image028.jpg"
import zhen_image029 from "./asset/zhen/image029.jpg"
import zhen_image030 from "./asset/zhen/image030.jpg"
import zhen_image031 from "./asset/zhen/image031.jpg"
import zhen_image032 from "./asset/zhen/image032.jpg"
import zhen_image033 from "./asset/zhen/image033.jpg"
import zhen_image034 from "./asset/zhen/image034.jpg"
import zhen_image035 from "./asset/zhen/image035.jpg"
import zhen_image036 from "./asset/zhen/image036.png"
import zhen_image037 from "./asset/zhen/image037.jpg"
import zhen_image038 from "./asset/zhen/image038.jpg"
import zhen_image039 from "./asset/zhen/image039.jpg"
import zhen_image040 from "./asset/zhen/image040.jpg"
import zhen_image041 from "./asset/zhen/image041.jpg"
import zhen_image042 from "./asset/zhen/image042.png"
import zhen_image043 from "./asset/zhen/image043.png"
import zhen_image044 from "./asset/zhen/image044.png"
import zhen_image045 from "./asset/zhen/image045.png"
import zhen_image046 from "./asset/zhen/image046.png"
import zhen_image047 from "./asset/zhen/image047.png"
import zhen_image048 from "./asset/zhen/image048.png"
import zhen_image049 from "./asset/zhen/image049.png"
import zhen_image050 from "./asset/zhen/image050.png"
import zhen_image051 from "./asset/zhen/image051.png"
import zhen_image052 from "./asset/zhen/image052.png"
import zhen_image053 from "./asset/zhen/image053.png"
import zhen_image054 from "./asset/zhen/image054.png"
let rand = function (detail) {
    let arr = []
    detail.forEach((item, i) =>{
        for(let j = 0; j<item[2]; j++){
            arr.push(i)
        }
    })
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
const yuPoolDetail = [
    ["青花镶金箸",image001, 1],
    ["青花花鸟纹盏",image002, 1],
    ["青花缠枝牡丹盘",image003, 1],
    ["赤金錾花嵌玉杯",image004, 1],
    ["赤金錾花凤首勺",image005, 1],
    ["赤金錾花八角盘",image006, 1],
    ["梅子青釉曲柄勺",image007, 1],
    ["梅子青釉刻花壶",image008, 1],
    ["梅子青釉荷叶盘",image009, 1],
    ["翡翠龙凤觥",image010, 1],
    ["翡翠镶金筷",image011, 1],
    ["翡翠薄胎马蹄碗",image012, 1],
    ["竹雕嵌宝葡萄碗",image013, 1],
    ["竹雕嵌宝荷叶杯",image014, 1],
    ["竹雕嵌宝芙蓉勺",image015, 1],
    ["黑陶蛋壳龙首勺",image016, 1],
    ["黑陶蛋壳带盖豆",image017, 1],
    ["黑陶蛋壳三足盉",image018, 1],
    ["错金银兽首铜勺",image019, 1],
    ["错金银饕餮纹簠",image020, 1],
    ["错金银铭文铜爵",image021, 1],
    ["琥珀洒金莲花钵",image022, 1],
    ["琥珀描金包银盏",image023, 1],
    ["琥珀冰裂纹勺",image024, 1],
    ["发晶花口高足杯",image025, 1],
    ["发晶鹊纹勺",image026, 1],
    ["发晶蝶纹三足盘",image027, 1],
    ["黑釉油滴大碗",image028, 1],
    ["黑釉曜变茶盏",image029, 1],
    ["黑釉兔毫勺",image030, 1],
    ["羊脂白玉葵口碟",image031, 1],
    ["羊脂白玉筷",image032, 1],
    ["羊脂白玉单耳杯",image033, 1],
    ["紫檀木调羹",image035, 1],
    ["紫檀木海棠式碗",image036, 1],
    ["紫檀木卷草纹觞",image037, 1],
    ["剔犀如意食盒",image038, 1],
    ["剔犀灵芝纹樽",image039, 1],
    ["剔犀螺纹漆匙",image040, 1],
    ["绿松石梅枝柄斗",image041, 1],
    ["绿松石蔓草纹碗",image042, 1],
    ["绿松石镶赤金筷",image043, 1],
    ["珐琅彩三友盖盅",image044, 1],
    ["珐琅彩鸡纹碗",image045, 1],
    ["珐琅彩杂宝调羹",image047, 1],
    ["匏制描金折纸勺",image048, 1],
    ["匏制描金云鹤杯",image049, 1],
    ["匏制描金花口碗",image050, 1],
    ["朱泥紫砂核桃勺",image051, 1],
    ["朱泥紫砂山水杯",image052, 1],
    ["朱泥紫砂花蝶碗",image053, 1],
    ["套料琉璃金花勺",image054, 1],
    ["套料琉璃螭龙杯",image055, 1],
    ["套料琉璃盘长碗",image056, 1],
    ["金累丝杯",image057, 1],
    ["金累丝碗",image058, 1],
    ["金累丝筷",image059, 1]
]
const zhenPoolDetail = [
    ["彩陶鲵鱼纹豆",zhen_image001,19],
        ["彩陶水波纹盉",zhen_image002,19],
        ["彩陶花瓣纹勺",zhen_image003,19],
        ["青铜象首纹簠",zhen_image004,19],
        ["青铜夔龙纹爵",zhen_image005,19],
        ["青铜鸟形匕",zhen_image006,19],
        ["紫晶直柄勺",zhen_image007,19],
        ["紫晶桃式杯",zhen_image008,19],
        ["紫晶鱼纹方盘",zhen_image009,19],
        ["釉里红三果盏",zhen_image010,19],
        ["釉里红龙纹盘",zhen_image011,19],
        ["釉里红鹊梅箸",zhen_image012,19],
        ["白釉勺",zhen_image013,19],
        ["白釉马蹄盏",zhen_image014,19],
        ["白釉笠形碗",zhen_image015,19],
        ["玛瑙金边碗",zhen_image016,19],
        ["玛瑙羊觞",zhen_image017,19],
        ["玛瑙嵌银筷",zhen_image018,19],
        ["金珀百花盏",zhen_image019,19],
        ["金珀刻花钵",zhen_image020,19],
        ["金珀光素勺",zhen_image021,19],
        ["青白玉筷",zhen_image022,19],
        ["青白玉菱口碟",zhen_image023,19],
        ["青白玉高柄杯",zhen_image024,19],
        ["酸枝木鸡心碗",zhen_image025,19],
        ["酸枝木凤纹觞",zhen_image026,19],
        ["酸枝木调羹",zhen_image027,19],
        ["填漆梅纹勺",zhen_image028,19],
        ["填漆双鸾食盒",zhen_image029,19],
        ["填漆鹿纹樽",zhen_image030,19],
        ["青金石镶金筷",zhen_image031,19],
        ["青金石鹤纹斗",zhen_image032,19],
        ["青金石兰纹碗",zhen_image033,19],
        ["粉彩花蝶茶盅",zhen_image034,19],
        ["粉彩人物纹碗",zhen_image035,19],
        ["粉彩福寿纹调羹",zhen_image036,19],
        ["鎏金八棱银杯",zhen_image037,19],
        ["鎏金银勺",zhen_image038,19],
        ["鎏金菱花银盘",zhen_image039,19],
        ["竹浮雕玉兰杯",zhen_image040,19],
        ["竹浮雕松纹果盘",zhen_image041,19],
        ["竹浮雕秋葵纹勺",zhen_image042,19],
        ["戗金琉璃兽纹勺",zhen_image043,19],
        ["戗金琉璃水纹杯",zhen_image044,19],
        ["戗金琉璃缠枝碗",zhen_image045,19],
        ["紫泥紫砂鱼尾勺",zhen_image046,19],
        ["紫泥紫砂卷枝杯",zhen_image047,19],
        ["紫泥紫砂莲瓣碗",zhen_image048,19],
        ["匏制砑花鱼水勺",zhen_image049,19],
        ["匏制砑花莲纹杯",zhen_image050,19],
        ["匏制砑花团寿碗",zhen_image051,19],
        ["银累丝勺",zhen_image052,19],
        ["银累丝杯",zhen_image053,19],
        ["银累丝碗",zhen_image054,19]
]
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
                name:"御膳具盒",
                img: yu_main,
                item: yuPoolDetail
            },
            {
                name:"珍膳具盒",
                img: zhen_main,
                item: [...zhenPoolDetail, ...yuPoolDetail]
            }
        ],
        "赌部件":[
            {
                name:"御品盛器",
                img: cheng_main,
                item: [
                    [ '青花缠枝牡丹盘', image003, 1 ],
                    [ '赤金錾花八角盘', image006, 1 ],
                    [ '梅子青釉荷叶盘', image009, 1 ],
                    [ '翡翠薄胎马蹄碗', image012, 1 ],
                    [ '竹雕嵌宝葡萄碗', image013, 1 ],
                    [ '黑陶蛋壳带盖豆', image017, 1 ],
                    [ '错金银饕餮纹簠', image020, 1 ],
                    [ '琥珀洒金莲花钵', image022, 1 ],
                    [ '发晶蝶纹三足盘', image027, 1 ],
                    [ '黑釉油滴大碗', image028, 1 ],
                    [ '羊脂白玉葵口碟', image031, 1 ],
                    [ '紫檀木海棠式碗', image036, 1 ],
                    [ '剔犀如意食盒', image038, 1 ],
                    [ '绿松石蔓草纹碗', image042, 1 ],
                    [ '珐琅彩鸡纹碗', image045, 1 ],
                    [ '匏制描金花口碗', image050, 1 ],
                    [ '朱泥紫砂花蝶碗', image053, 1 ],
                    [ '套料琉璃盘长碗', image056, 1 ],
                    [ '金累丝碗',image058, 1 ]
                ]
            },
            {
                name:"御品酒器",
                img: jiu_main,
                item: [
                    [ '青花花鸟纹盏', image002, 1 ],
                    [ '赤金錾花嵌玉杯', image004, 1 ],
                    [ '梅子青釉刻花壶', image008, 1 ],
                    [ '翡翠龙凤觥', image010, 1 ],
                    [ '竹雕嵌宝荷叶杯', image014, 1 ],
                    [ '黑陶蛋壳三足盉', image018, 1 ],
                    [ '错金银铭文铜爵', image021, 1 ],
                    [ '琥珀描金包银盏', image023, 1 ],
                    [ '发晶花口高足杯', image025, 1 ],
                    [ '黑釉曜变茶盏', image029, 1 ],
                    [ '羊脂白玉单耳杯', image033, 1 ],
                    [ '紫檀木卷草纹觞', image037, 1 ],
                    [ '剔犀灵芝纹樽', image039, 1 ],
                    [ '绿松石梅枝柄斗', image041, 1 ],
                    [ '珐琅彩三友盖盅', image044, 1 ],
                    [ '匏制描金云鹤杯', image049, 1 ],
                    [ '朱泥紫砂山水杯', image052, 1 ],
                    [ '套料琉璃螭龙杯', image055, 1 ],
                    [ '金累丝杯', image057, 1 ]
                ]

            },
            {
                name:"御品箸勺",
                img: shao_main,
                item: [
                    [ '青花镶金箸', image001, 1 ],
                    [ '赤金錾花凤首勺', image005, 1 ],
                    [ '梅子青釉曲柄勺', image007, 1 ],
                    [ '翡翠镶金筷', image011, 1 ],
                    [ '竹雕嵌宝芙蓉勺', image015, 1 ],
                    [ '黑陶蛋壳龙首勺', image016, 1 ],
                    [ '错金银兽首铜勺', image019, 1 ],
                    [ '琥珀冰裂纹勺', image024, 1 ],
                    [ '发晶鹊纹勺', image026, 1 ],
                    [ '黑釉兔毫勺', image030, 1 ],
                    [ '羊脂白玉筷', image032, 1 ],
                    [ '紫檀木调羹', image035, 1 ],
                    [ '剔犀螺纹漆匙', image040, 1 ],
                    [ '绿松石镶赤金筷', image043, 1 ],
                    [ '珐琅彩杂宝调羹', image047, 1 ],
                    [ '匏制描金折纸勺', image048, 1 ],
                    [ '朱泥紫砂核桃勺', image051, 1 ],
                    [ '套料琉璃金花勺', image054, 1 ],
                    [ '金累丝筷', image059, 1 ]
                ]
            }
        ],
    }
    function info() {
        Modal.info({
            title: '公告',
            okText:"知道了",
            content: (
                <div>
                    这是一个公告
                </div>
            ),
            onOk() {},
        });
    }
    useEffect(()=>{
        // info()
    },[])
  return (
    <div className="App">
        <div className={"main-container"}>
            <img style={{width:"70%", margin:"0 15%"}} src={bg} alt=""/>
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
                            <div style={{textAlign:"center"}} key={item.name}>
                                <img src={item.img} alt="" onClick={()=>{
                                    setSecondPoolSelect(item.name)
                                }}/>
                                <div style={{color: "red",fontSize:24, marginTop:10}}>{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div>当前池子: <span style={{color: "red"}}>{secondPoolSelect}</span></div>
            <div style={{display:"flex", alignItems:"center",marginTop:20}}>
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
            <div style={{minHeight:200}}>
                {
                    result.length > 0 &&
                    <div>
                        <div>抽奖结果:</div>
                        <div className="img-container">
                            {
                                result.map((item,i) =>{
                                    return(
                                        <div className={"img-block"} key={i}>
                                            <img key={i} src={item[1]} alt=""/>
                                            <div style={{color: "red",fontSize:24, marginTop:10}}>{item[0]}</div>
                                        </div>
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
        {/*<div className={"footer"}>*/}
        {/*    design by wxk666*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
