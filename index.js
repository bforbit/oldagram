// Array with 3 objects
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Selected container element from HTML
const containerOfPosts = document.querySelector(".containerPosts");

// Loop through each object in posts array
posts.forEach((artistPost, index) => {
    
    // Created single post 'div' container
    const singlePost = document.createElement('div');
    singlePost.classList.add('singlePost');
  
  // Established template string containing HTML for a single post
  singlePost.innerHTML = `
      <section class="singlePostHeader">
        <img src="${artistPost.avatar}" alt="user icon" class="icon-pic2">
        <div class="title-location">
          <span class="titleBold">${artistPost.name}</span>
          <br><span class="location">${artistPost.location}</span>
        </div>
      </section>
      
       <img src="${artistPost.post}" alt="post image" class="post-size">

      <section class="reaction-icons">
        <img src="images/icon-heart.png" class="icons" id="heart-${index}">
        <img src="images/icon-comment.png" class="icons">
        <img src="images/icon-dm.png" class="icons">
      </section>
      
      <section class="reaction-statement">
        <span class="titleBold like-count">${artistPost.likes} likes</span>
        <p><span class="titleBold">${artistPost.username}</span><span class="comment">${artistPost.comment}</span></p>
      </section>
    `;
    
    // Append single post to container
    containerOfPosts.appendChild(singlePost);
    
    // Select heart icon and like count
    const heartIcon = singlePost.querySelector(`#heart-${index}`);
    const likeCount = singlePost.querySelector('.like-count');
    
    // Double-click icon, increase likes by 1 and updated number, changed icon to red version
    heartIcon.addEventListener('dblclick', function () {
      artistPost.likes++;
      likeCount.textContent = artistPost.likes + " " + "likes";
      heartIcon.src = "/images/icon-heart-red.png";
    });
});