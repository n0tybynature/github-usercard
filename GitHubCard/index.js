/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

// move to before appendchild on line 23
const cards = document.querySelector(".cards")

const URL = "https://api.github.com/users/n0tybynature"

axios.get(URL)
  .then(res => {
  console.log(res.data)
  cards.appendChild(cardMaker(res.data))

  })
  .catch(err=>{
    console.log(err)
    
  })

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/





/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const followersArray = ['tetondan','dustinmyers',"justsml","luishrd","bigknell"];
/*
axios.get(`https://api.github.com/users/${followersArray}`)
  .then(res => {
    console.log(followersArray.res.data);
    followersArray.forEach( newUser => {
      cardMaker(res.data)
    })
  })
*/
followersArray.forEach( ( newUser ) => {
  axios.get(`https://api.github.com/users/${newUser}`)
  .then( ( res ) => {
    cards.appendChild( cardMaker( res.data ) )
  } )
  .catch( ( error ) => {
    console.log( error );
  } )
} )

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
  axios.get(url))
    <div class="card">
      <img src=${data.avatar_url} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p class>Location:%data.location%</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/






function cardMaker(data){
  const div = document.createElement("div");
  const image = document.createElement("img");
  const div2 = document.createElement("div");
  const name = document.createElement("h3");
  const user = document.createElement("p")
  const profile = document.createElement("p")
  const location = document.createElement("p")
  const follower = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")
  const link = document.createElement("a")

  

  div.classList.add("card")
  div2.classList.add("card-info")
  name.classList.add("name")
  user.classList.add("username")

  image.src = data.avatar_url;
  name.textContent = data.name;
  user.textContent = data.login;
  profile.textContent = "Profile: ";
  location.textContent = `Location: ${data.location}`;
  follower.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;
  link.href = data.html_url;
  link.textContent = data.html_url;

  //After content is set, then you appendchild. If not, content will be blank
  profile.appendChild(link)
  div.appendChild(image)
  div.appendChild(div2) 
  div2.appendChild(name)
  div2.appendChild(user)
  div2.appendChild(location)
  div2.appendChild(profile)
  div2.appendChild(follower)
  div2.appendChild(following)
  div2.appendChild(bio)
  
  
  



  return div;
}



  










