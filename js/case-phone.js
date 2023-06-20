document.getElementById('btn-case-plus').addEventListener('click' ,  function(){
    const caseInputField = document.getElementById('case-number')
    const previoudCaseNumber =  parseInt(caseInputField.value);
    caseInputField.value = previoudCaseNumber + 1 
   
    const totalCase = parseInt(caseInputField.value)
    const casePriceText= document.getElementById('case-price')
    const casePrice = parseInt(casePriceText.innerText)
    const currentPrice = totalCase * 100
    casePriceText.innerText = currentPrice

    const subtotal = document.getElementById('subtotal')
    const total = parseInt(subtotal.innerText)

    const phonePriceText= document.getElementById('phone-price')
    const phonePrice = parseInt(phonePriceText.innerText)
    
    subtotal.innerText = phonePrice + currentPrice
    // const tax = parseInt (subtotal.innerText)

    taxCalculate();
    totalCalculate()

})
document.getElementById('btn-case-minus').addEventListener('click' ,  function(){
    const caseInputField = document.getElementById('case-number')
    const previoudCaseNumber =  parseInt(caseInputField.value);
    
    if(previoudCaseNumber>1){
        caseInputField.value = previoudCaseNumber - 1
    }
    const totalCase = parseInt(caseInputField.value)
    const casePriceText= document.getElementById('case-price')
    const casePrice = parseInt(casePriceText.innerText)
    const currentPrice = totalCase * 100
    casePriceText.innerText = currentPrice

    const subtotal = document.getElementById('subtotal')
    const total = parseInt(subtotal.innerText)

    const phonePriceText= document.getElementById('phone-price')
    const phonePrice = parseInt(phonePriceText.innerText)
    
    subtotal.innerText = phonePrice + currentPrice
   
    // const tax = parseInt (subtotal.innerText)

    taxCalculate();
    totalCalculate()
   
});



document.getElementById('btn-phone-plus').addEventListener('click' ,  function(){
    const phoneInputField = document.getElementById('phone-number')
    const previoudPhoneNumber =  parseInt(phoneInputField.value);
    phoneInputField.value = previoudPhoneNumber + 1

    const totalphone = parseInt(phoneInputField.value)
    const phonePriceText= document.getElementById('phone-price')
    const phonePrice = parseInt(phonePriceText.innerText)
    const currentPrice = totalphone * 1200
    phonePriceText.innerText = currentPrice


    const subtotal = document.getElementById('subtotal')
    const total = parseInt(subtotal.innerText)

    const casePriceText= document.getElementById('case-price')
    const casePrice = parseInt(casePriceText.innerText)
    
    const totalPrice = phonePrice + casePrice
    
    subtotal.innerText = casePrice + currentPrice

    // const tax = parseInt (subtotal.innerText)
    taxCalculate();
    totalCalculate()
   
})
document.getElementById('btn-phone-minus').addEventListener('click' ,  function(){
    const phoneInputField = document.getElementById('phone-number')
    const previoudPhoneNumber =  parseInt(phoneInputField.value);
   
    
    if(previoudPhoneNumber>1){
        phoneInputField.value = previoudPhoneNumber - 1
    }
    const totalphone = parseInt(phoneInputField.value)
    const phonePriceText= document.getElementById('phone-price')
    const phonePrice = parseInt(phonePriceText.innerText)
    const currentPrice = totalphone * 1200
    phonePriceText.innerText = currentPrice

        
    const subtotal = document.getElementById('subtotal')
    const total = parseInt(subtotal.innerText)

    const casePriceText= document.getElementById('case-price')
    const casePrice = parseInt(casePriceText.innerText)
    
    const totalPrice = phonePrice + casePrice

    subtotal.innerText = casePrice + currentPrice


    // const tax = parseInt (subtotal.innerText)
    taxCalculate();
    totalCalculate()


})



function taxCalculate (){
    const subtotal = document.getElementById('subtotal')
    const total = parseInt(subtotal.innerText)

   const taxField = document.getElementById('tax')
   taxField.innerText =  total* 0.1
     
   return (parseInt(taxField.innerText))

}

function totalCalculate(){
    const total= document.getElementById('total')

    const totaltax = taxCalculate()

    const subtotal = document.getElementById('subtotal')
    const totalamount = parseInt(subtotal.innerText)

    total.innerText = totaltax + totalamount
}











