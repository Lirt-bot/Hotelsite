

 const restaurantMore=document.getElementById('restaurant-more')
    if (restaurantMore) {
    restaurantMore.textContent = "The hotel restaurant is designed to be a comfortable meeting place for both guests and visitors. With a modern yet warm interior, it provides the perfect setting for everything from quiet meals to social gatherings. Our menu focuses on fresh ingredients and well-balanced dishes, offering a variety of options throughout the day. In the morning, guests can enjoy a relaxed breakfast with a selection of fresh and classic options. During lunch and dinner, the restaurant serves a range of dishes prepared with quality ingredients, suitable for both lighter meals and more complete dining experiences. Parts of the restaurant can also be reserved for private events, making it a flexible venue for celebrations, business dinners, meetings, or small gatherings. Our staff will gladly assist in arranging the space to suit the needs of each event, ensuring a comfortable and enjoyable experience. Whether you are visiting for a meal, meeting friends, or hosting a special occasion, the restaurant aims to provide a welcoming environment where good food and good company come together."
}
 const standardMore=document.getElementById('standard-more')
if (standardMore) {
    standardMore.textContent = " Designed with a clean and modern style, the room offers everything needed for a pleasant and convenient visit. The room features a comfortable bed, a private bathroom with shower, a work desk, and essential amenities such as a flat-screen TV, complimentary Wi-Fi, and climate control. Soft lighting and a calm interior create a welcoming atmosphere ideal for unwinding after a day of travel or activities. The Standard Room is a great choice for guests seeking comfort, simplicity, and value."
}

const deluxMore=document.getElementById('delux-more')
if (deluxMore) {
    deluxMore.textContent=" Designed with modern furnishings and thoughtful details, the room provides a relaxing atmosphere for both business and leisure travelers. The room features a spacious bed, a private bathroom with shower, a work desk, and a seating area. Large windows allow plenty of natural light, creating a bright and welcoming environment. Guests can also enjoy amenities such as a flat-screen TV, complimentary Wi-Fi, climate control, and a minibar. With its balance of comfort, style, and convenience, the Deluxe Room provides an upgraded experience compared to our Standard Room while maintaining a cozy and relaxing atmosphere."

}
const suiteMore=document.getElementById('suite-more')
if(suiteMore) {
    suiteMore.textContent=" With separate living and sleeping areas, the suite provides both privacy and room to relax in style. The suite features a large bed, a private bathroom, a comfortable lounge area, and a dedicated workspace. Thoughtfully selected furnishings and modern amenities—including a flat-screen TV, complimentary Wi-Fi, climate control, and a minibar—ensure a relaxing and convenient experience. Perfect for longer stays, special occasions, or guests seeking extra space, the Suite delivers a premium hotel experience with comfort and sophistication."
}
const cateringMore=document.getElementById('catering-more')
if(cateringMore){
    cateringMore.textContent=" Our catering service brings the same quality and care from our restaurant to your chosen venue. Whether for private gatherings or professional events, we offer flexible solutions tailored to your needs."
}

 


function toggleMore(id, button) {
    const element = document.getElementById(id)
    element.classList.toggle('hidden')
    
    
    if (element.classList.contains('hidden')) {
        button.textContent = 'Show more'
    } else {
        button.textContent = 'Show less'
    }
}

     const bookingForm = document.getElementById('booking-form')
     const successMessage = document.getElementById('success-message')
     const submitBtn = document.getElementById('submit-btn')
     const closeBtn = document.getElementById('close-btn')


     const bookButtons= document.querySelectorAll('.book-btn')

    bookButtons.forEach(function(button){
        button.addEventListener('click', function(){
            bookingForm.classList.remove('hidden')

        })

    })

    closeBtn.addEventListener('click', function() {
        bookingForm.classList.add('hidden')
    })

    submitBtn.addEventListener('click',function(){
        bookingForm.classList.add('hidden')
        successMessage.classList.remove('hidden')
    })

    document.getElementById('close-success').addEventListener('click', function() {
        successMessage.classList.add('hidden')
})

   