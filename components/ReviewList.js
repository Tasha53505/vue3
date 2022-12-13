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
            <li v-for="(review, index) in reviews" :key="index"> </li>
            {{ review.name }} gave this {{ review.rating }} stars
            <br>
            "{{ review.review }}"
        </ul>
   </div>
   `
// adding index so we can bind the ket attribute to it.

})