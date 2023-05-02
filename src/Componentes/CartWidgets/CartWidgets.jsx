import './CartWidgets.css'

const CarWidgets = () => {
    const IconoCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3ww1a4AHdPRCSFZRgwNCDi5sGzHanPszMnmspin2es3VZ8oq_mEJqytcilaKzMWo5C0&usqp=CAU"
  return (
    <div>
       <img className='icoCarrito' src={IconoCarrito} alt="Carrito de Compras" />
       <strong>4</strong>

    </div>
  )
}

export default CarWidgets