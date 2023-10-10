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

const containerOfPosts = document.querySelector(".containerPosts");

let renderInHtml = '';

for (let i = 0; i < posts.length; i++) {
    
  const artistPost = posts[i];
  
  renderInHtml += `
    <section class="post-artist">
    
      <div class="container2">
        <img src="${artistPost.avatar}" alt="user icon" class="icon-pic2">
        <div class="name-loc">
          <span class="titles">${artistPost.name}</span>
          <br><span class="location">${artistPost.location}</span>
        </div>
      </div>
      
       <img src="${artistPost.post}" alt="post image" class="post">

      <div class="reaction-icons">
        <img src="images/icon-heart.png" class="icons">
        <img src="images/icon-comment.png" class="icons">
        <img src="images/icon-dm.png" class="icons">
      </div>
      
      <div class="reaction-statement">
        <span class="titles">${artistPost.likes} likes</span>
        <p><span class="titles">${artistPost.username}</span><span class="comment">${artistPost.comment}</span></p>
      </div>
      
    </section>
   `;
}

containerOfPosts.innerHTML = renderInHtml;