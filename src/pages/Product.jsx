import React from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { createDataFunc } from '../redux/dataSlice'








const Product = () => {
  const {modal} = useSelector(state => state.modal);
  const dispatch = useDispatch
  const [productInfo, setproductInfo] = useState({name:"",price:"", url:""});

  const onChangeFunc = (e, type,) => {
    if(type=="url"){
      setproductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))

    }else{
        setproductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  }


const buttonFunc = () => {
  dispatch(createDataFunc(createDataFunc))
}
 const contentModal = (
  <>
         <Input type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")}/>
          <Input type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")}/>
          <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")}/>
          <Button btnText={"Ürün Oluştur"} onClick={buttonFunc}/>
  </>
 )
  return (
    <div>
      <ProductCard/>
      {modal && <Modal content={"contentModal"} title={"Ürün Oluştur"} btnText={"Oluştur"} btnFunc={buttonFunc}/>}
      </div>
  )
}

export default Product
