document.addEventListener('DOMContentLoaded', ()=>{

    console.log('DOM')

    const inputs = document.getElementsByClassName('cart__quantity')
    const button = document.querySelector('.cart__btn-calculate')
    const totalEl = document.querySelector('.cart__total-price')

    // button.addEventListener('click', () => {
    //     let price = 0;
    //     [...inputs].forEach(input => {
    //         price += input.dataset.price * input.value
    //     });
    //     console.log(price)
    // })
if(button && totalEl){
     button.addEventListener('click', () => {
        let total = 0;
        [...inputs].forEach(input => {
            const {dataset: {price}, value} = input
            total += price * value
        });
        console.log(total)
        totalEl.innerText = total
    }
     )
}
})
   