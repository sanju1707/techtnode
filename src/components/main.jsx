
import { useEffect,useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomePage=()=>{
    const[alldata,setalldata]=useState([])
    let[data,setData]=useState([])
    
    
    useEffect(()=>{
        fetchHandler()
       
    },[])
   
    const fetchHandler= async()=>{
        let data= await fetch("https://fakestoreapi.com/products")
        let products= await data.json()
        setalldata(products)
        setData(products)
      
     
    }
   
   
    const jewHandler=()=>{
        
        const jewellery=alldata.filter((each)=>each.category=="jewelery")
        setData(jewellery)
       
    }
    const elehandler=()=>{
        
        const electronics=alldata.filter((each)=>each.category=="electronics")
        setData(electronics)
       
    }
    const menHanlder=()=>{
        
        const men=alldata.filter((each)=>each.category=="men's clothing")
        setData(men)
        
    }
    const womenHandler=()=>{
        
        const womens=alldata.filter((each)=>each.category=="women's clothing")
        setData(womens)
        
    }
    return(
        <div>
            
            <div style={{width:"100%",height:50,backgroundColor:"black",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                color:"white"
            }}>

                <span onClick={jewHandler}>jewellery</span>
                <span onClick={elehandler}>electronics</span>
                <span onClick={menHanlder}>mens wear</span>
                <span onClick={womenHandler}>womens wear</span>

            </div>
            <marquee>welcome to our techtnode e commerce website</marquee>
           {
            data.length>0 && <div style={{width:"100%",height:"100vh",
                display:"flex",
               flexDirection:"row",
               justifyContent:"space-around",
               alignItems:"center",
               flexWrap:"wrap",
               

            }}>
                {
                    data.map((item)=>{
                        return  <Card style={{ width: '300px',height:"500px", }}>
                        <Card.Img variant="top" src={item.image} style={{width:"200px",height:"150px"}} />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                           {item.description}
                          </Card.Text>
                          <Button variant="primary" style={{backgroundColor:"blue",color:"white"}}>Buy</Button>
                        </Card.Body>
                      </Card>
                    })
                }
            </div>
           }

        </div>
    )
}
export default HomePage