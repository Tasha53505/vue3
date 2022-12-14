app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
   ` 
   <div class='review-container'>
     <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index"> 
                {{ review.name }} gave this {{ review.rating }} stars
                <br>
                "{{ review.review }}"
                <br>
                {{ review.name }} says  {{ review.question }} to recommending this product!
            </li>
        </ul>
   </div>
   `

})




// adding index so we can bind the ket attribute to it.
