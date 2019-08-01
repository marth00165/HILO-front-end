const hostRight = ["../images/therat/right/amazed.png", "../images/therat/right/cool.png", "../images/therat/right/glimmer.png", "../images/therat/right/right.png", "../images/therat/right/roll.png", "../images/therat/right/wild.png", "../images/therat/right/wowRight.png"]
const hostWrong = ["../images/therat/wrong/bigOOF.png", "../images/therat/wrong/crickets.png", "../images/therat/wrong/disappointedDad.png", "../images/therat/wrong/firstTime.png", "../images/therat/wrong/grandmaBridge.png", "../images/therat/wrong/hurt.png", "../images/therat/wrong/lawnChair.png", "../images/therat/wrong/prison.png", "../images/therat/wrong/ramsay.png"]
const avatarImages = ["../images/avatars/1.jpg", "../images/avatars/2.png", "../images/avatars/3.png", "../images/avatars/4.png", "../images/avatars/5.png", "../images/avatars/6.png", "../images/avatars/7.png", "../images/avatars/8.png", "../images/avatars/9.png", "../images/avatars/10.png", "../images/avatars/11.png", "../images/avatars/12.png", "../images/avatars/13.png", "../images/avatars/14.png", "../images/avatars/15.png", "../images/avatars/16.png", "../images/avatars/17.png", "../images/avatars/18.png", "../images/avatars/19.png", "../images/avatars/20.png", "../images/avatars/21.png", "../images/avatars/hot_dog.jpg"]
const userUrl = 'https://localhost3000/users'

  function variables() {

        modal = document.getElementById("myModal");
        winner = document.getElementById('winner')
        turn = 1;
        user1Cards = []
        user2Cards = []
        user1Clicks = 0
        user2Clicks = 0
        deck = new Deck()
        deck2 = new Deck()
        deck.shuffle()
        user1Cards.push(deck.deal())
        deck.base.push(user1Cards[0])
        deck2.shuffle()
        user2Cards.push(deck2.deal())
        deck2.base.push(user2Cards[0])
        cards2 = deck2.current
        cards = deck.current
        user1info = document.getElementById("player1info")
        avatar1 = document.createElement("img")
        avatar1.src = avatarImages[Math.floor(Math.random() * avatarImages.length)]
        hr1 = document.createElement("hr")
        hr1.className = "user-hr"
        user1nameSpace = document.createElement("p")
        user1nameSpace.innerText = "h o t d o g"
        user2info = document.getElementById("player2info")
        avatar2 = document.createElement("img")
        avatar2.src = avatarImages[Math.floor(Math.random() * avatarImages.length)]
        hr2 = document.createElement("hr")
        hr2.className = "user-hr"
        user2nameSpace = document.createElement("p")
        user2nameSpace.innerText = "El Curry La Lasagna"
        content = document.getElementById("content1")
        content2 = document.getElementById('content2')
        footer = document.getElementById('footer')
        higherButton = document.createElement("button")
        higherButton.innerText = "Higher"
        higherButton.addEventListener("click", function(e) {
            disableButtons()
            betHigher()
        })
        lowerButton = document.createElement("button")
        lowerButton.innerText = "Lower"
        lowerButton.addEventListener("click", function(e) {
            disableButtons()
            betLower()
        })
        higherButton.className = "button"
        lowerButton.className = "button"
        holdButton = document.createElement('button')
        holdButton.addEventListener("click", holdCards)
        holdButton.innerText = "Hold Cards"
        holdButton.className = "smallButton"
        newBaseCardButton = document.createElement('button')
        newBaseCardButton.innerText = "New Base Card"
        newBaseCardButton.className = "smallButton"
        newBaseCardButton.addEventListener("click", newBaseCard)
        smallFooter = document.getElementById('small')
    }

  function appendGame(){
    let body = document.body
    let rulesDiv = document.createElement("div")
    rulesDiv.id = "rulesDiv"
    host = document.createElement("img")
    host.id = "ratrules"
    host.src = "../images/therat/ratRules.png"
    host.addEventListener("click", openRules)
    rulesDiv.appendChild(host)
    body.appendChild(rulesDiv)
    let tracker = document.getElementById("user1")
    tracker.id = "displayed"
    nameInput1 = document.createElement("input")
    nameInput1.maxLength = 16
    nameInput1.setAttribute("placeholder", "enter nickname")
    nameInput2 = document.createElement("input")
    nameInput2.setAttribute("placeholder", "enter nickname")
    nameInput2.maxLength = 16
    user1info.appendChild(avatar1)
    user1info.appendChild(hr1)
    user1info.appendChild(nameInput1)
    user2info.appendChild(avatar2)
    user2info.appendChild(hr2)
    user2info.appendChild(nameInput2)
    nameInput1.addEventListener("keypress", function(e){
      var key = e.which || e.keyCode;
      if(key === 13){
        user1nameSpace.innerText = e.target.value
        user1info.removeChild(nameInput1)
        user1info.appendChild(user1nameSpace)
      }
    })
    nameInput1.addEventListener("blur", function(e){
        user1nameSpace.innerText = e.target.value
        user1info.removeChild(nameInput1)
        user1info.appendChild(user1nameSpace)
    })
    nameInput2.addEventListener("keypress", function(e){
      var key = e.which || e.keyCode;
      if(key === 13){
        user2nameSpace.innerText = e.target.value
        user2info.removeChild(nameInput2)
        user2info.appendChild(user2nameSpace)
      }
    })
    nameInput2.addEventListener("blur", function(e){
        user2nameSpace.innerText = e.target.value
        user2info.removeChild(nameInput2)
        user2info.appendChild(user2nameSpace)
    })

    //buttons append
    let smallbuttons = [higherButton, lowerButton]
    smallbuttons.forEach(function(button) {
      button.className = "smallButton"
      button.id = "buttonRow1"
      smallFooter.appendChild(button)
    })

    let buttons = [holdButton, newBaseCardButton]
    buttons.forEach(function(button) {
      button.className = "smallButton"
      button.id = "buttonRow2"
      smallFooter.appendChild(button)
    })
  }


  //player1  cards
  function player1Cards() {
    user1Cards.forEach(card => {
      let image = document.createElement("img")
      image.src = card.url
      image.className = "card"
      content.appendChild(image)
    })


    for (var i = 0; i < (6 - user1Cards.length); i++) {
      let image = document.createElement("img")
      image.src = "../images/cards/yellow_back.png"
      image.className = "card"
      content.appendChild(image)
    }
  }



  //player 2 cards
  function player2Cards() {
    user2Cards.forEach(card => {
      let image = document.createElement("img")
      image.src = card.url
      image.className = "card"
      content2.appendChild(image)
    })

    for (var i = 0; i < (6 - user2Cards.length); i++) {
      let image = document.createElement("img")
      image.src = "../images/cards/red_back.png"
      image.className = "card"
      content2.appendChild(image)
    }
  }




  function betHigher() {

    //player 1
    if (turn === 1 && user1Cards.length < 6) {
      ++user1Clicks
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
        if (!compareCardsHigher(user1Cards)) {
         host.src = hostWrong[Math.floor(Math.random() * hostWrong.length)]
         host.id = "rathost"
         host.className = ""
          newBaseCardButton.disabled = false;
            turn = 2;
            user1Cards = deck.base.map(e => e)
            setTimeout(function() {
              changeTurns()
              content.innerHTML = ""
              player1Cards()
      }, 2000)}else {
        host.src = hostRight[Math.floor(Math.random() * hostRight.length)]
        host.id = "rathost"
        host.className = ""
      }
    }
    //player 2
     else if (turn === 2 && user2Cards.length < 6) {
      ++user2Clicks
      content2.innerHTML = ""
      let card = deck2.deal()
      user2Cards.push(card)
      player2Cards()
      if (!compareCardsHigher(user2Cards)) {
        host.src = hostWrong[Math.floor(Math.random() * hostWrong.length)]
        host.id = "rathost"
        host.className = ""
        newBaseCardButton.disabled = false;
        turn = 1;
        user2Cards = deck2.base.map(e => e)
        setTimeout(function() {
          changeTurns()
          content2.innerHTML = ""
          player2Cards()
      }, 2000)}else{
        host.src = hostRight[Math.floor(Math.random() * hostRight.length)]
        host.id = "rathost"
        host.className = ""
      }
  }
  setTimeout(function () {
    enableMostButtons()
    checkWinner()
  }, 2000);
}

  function betLower(){
    if (turn === 1 && user1Cards.length < 6) {
      ++user1Clicks
      content.innerHTML = ""
      let card = deck.deal()
      user1Cards.push(card)
      player1Cards()
      if (!compareCardsLower(user1Cards)) {
        host.src = hostWrong[Math.floor(Math.random() * hostWrong.length)]
        host.id = "rathost"
        host.className = ""
        newBaseCardButton.disabled = false;
          turn = 2;
          user1Cards = deck.base.map(e => e)
          setTimeout(function() {
            changeTurns()
            content.innerHTML = ""
            console.log(deck.base)
            player1Cards()

          }, 2000)}else{
            host.src = hostRight[Math.floor(Math.random() * hostRight.length)]
            host.id = "rathost"
            host.className = ""
          }
    }
    else if (turn === 2 && user2Cards.length < 6) {
      ++user2Clicks
      content2.innerHTML = ""
      let card = deck2.deal()
      user2Cards.push(card)
      player2Cards()

      if (!compareCardsLower(user2Cards)) {
        host.src = hostWrong[Math.floor(Math.random() * hostWrong.length)]
        host.id = "rathost"
        host.className = ""
        newBaseCardButton.disabled = false;
        turn = 1;
        user2Cards = deck2.base.map(e => e)
        setTimeout(function() {
          changeTurns()
          content2.innerHTML = ""
          player2Cards()
      }, 2000)}else{
        host.src = hostRight[Math.floor(Math.random() * hostRight.length)]
        host.id = "rathost"
        host.className = ""
      }
    }
    setTimeout(function () {
      checkWinner()
      enableMostButtons()
    }, 2000);
  }






  function compareCardsHigher(cards) {
    if (cards[cards.length - 1].faceValue > cards[cards.length - 2].faceValue) {
      return true;
    } else {
      return false;
    }
  }

  function compareCardsLower(cards) {
    if (cards[cards.length - 1].faceValue < cards[cards.length - 2].faceValue) {
      return true;
    } else {
      return false;
    }
  }

  function holdCards() {
    newBaseCardButton.disabled = false;
    if(turn === 1){
      changeTurns()
      turn = 2
      deck.base.length = 0
      deck.base = user1Cards.map(e => e)
    }
    else if(turn === 2){
      changeTurns()
      turn = 1
      deck2.base.length = 0
      deck2.base = user2Cards.map(e => e)
    }

  }

  function newBaseCard(){
    if (turn === 1){
      deck.base.pop()
      user1Cards.pop()
      let newCard = deck.deal()
      deck.base.push(newCard)
      user1Cards.push(newCard)
      content.innerHTML = ""
      newBaseCardButton.disabled = true;
      newBaseCardButton.style.background = "#7298B3"
      player1Cards()
    }
    else if(turn === 2) {
      deck2.base.pop()
      user2Cards.pop()
      let newCard = deck2.deal()
      deck2.base.push(newCard)
      user2Cards.push(newCard)
      content2.innerHTML = ""
      newBaseCardButton.disabled = true;
      newBaseCardButton.style.background = "#7298B3"
      player2Cards()
    }
  }

  function changeTurns() {
      enableButtons()
      let on = document.getElementById("displayed")
      let off = document.getElementById("off")
      on.id = "off"
      off.id = "displayed"
  }

  function disableButtons(){
      host.className = "hidden"
      higherButton.disabled = true
      lowerButton.disabled = true
      holdButton.disabled = true
      newBaseCardButton.disabled = true
      higherButton.style.background = "#7298B3"
      lowerButton.style.background = "#7298B3"
      holdButton.style.background = "#7298B3"
      newBaseCardButton.style.background = "#7298B3"
  }

  function enableButtons(){
    host.className = "hidden"
    higherButton.disabled = false
    lowerButton.disabled = false
    holdButton.disabled = false
    newBaseCardButton.disabled = false
    higherButton.style.background = "#FF5258"
    lowerButton.style.background = "#FF5258"
    holdButton.style.background = "#FF5258"
    newBaseCardButton.style.background = "#FF5258"
  }

  function enableMostButtons(){
    host.className = "hidden"
    higherButton.disabled = false
    lowerButton.disabled = false
    holdButton.disabled = false
    higherButton.style.background = "#FF5258"
    lowerButton.style.background = "#FF5258"
    holdButton.style.background = "#FF5258"
  }

  function checkWinner(){
      if(user1Cards.length === 6){
          postWinner(user1nameSpace.innerText, user1Clicks)
          confetti.start()
          let newGameButton = document.createElement("button")
          newGameButton.innerText = "New Game"
          winner.innerText = "Player 1 wins!"
          newGameButton.addEventListener("click", function(e){
            document.body.innerHTML = clone
            welcome()
          })
          winner.appendChild(newGameButton)
          modal.style.display = "block";


          // alert("Player 1 wins!")
          // document.body.innerHTML = clone
          // welcome()
      }else if (user2Cards.length === 6){
          postWinner(user2nameSpace.innerText, user2Clicks)
          confetti.start()
          let newGameButton = document.createElement("button")
          newGameButton.innerText = "New Game"
          winner.innerText = "Player 2 wins! "
          newGameButton.addEventListener("click", function(e){
            document.body.innerHTML = clone
            welcome()
          })
          winner.appendChild(newGameButton)
          modal.style.display = "block";
          // alert("Player 2 wins!")
          // document.body.innerHTML = clone
          // welcome()

      }
  }


function welcome(){
  confetti.stop()
  variables()
  clone = document.body.innerHTML
  let body = document.getElementById('footer')
  let king = document.createElement("div")
  king.id = "rat"
  let logo = document.createElement('h1')
  let motto = document.createElement('h3')

  start = document.createElement('button')
  startButton = document.getElementById('startButton')

  startButton.addEventListener("click", function(e){
    body.removeChild(logo)
    body.removeChild(motto)
    body.removeChild(startButton)
    body.removeChild(king)

    appendGame()
    player1Cards()
    player2Cards()
  })
  let rat = document.createElement("img")
  rat.src="../images/therat/kingRat.png"
  king.appendChild(rat)
  start.innerText = "NEW GAME"
  logo.innerText = "Hi-Lo"
  motto.innerText = "Aim High Score Low"
  body.appendChild(logo)
  body.appendChild(motto)
  body.appendChild(startButton)
  body.appendChild(king)
  startButton.appendChild(start)

}

function openRules(){

    rulesModal = document.getElementById("rulesModal")
    rulesModal.style.display = "block"
    let span = document.getElementsByClassName("close")[0]
    span.onclick = function() {
        rulesModal.style.display = "none";
      }
      window.addEventListener("keydown",function(e){
        var key = e.which || e.keyCode;

        if ( rulesModal.style.display = "block" && key === 27){
          rulesModal.style.display = "none";
        }
      })
      window.onclick = function(event) {
        if (event.target == rulesModal) {
          rulesModal.style.display = "none";
        }
      }
}

function postWinner(nickname, clicks){
  if(nickname === "h o t d o g" || nickname === "El Curry La Lasagna"){
    return fetch("https://intense-tundra-74441.herokuapp.com/games", {
      method: "post",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(
        {'nickname': "blank" , 'guesses': clicks})
      })
      .then(res => res.json())
      .then(json => console.log(json.user.nickname, json))
  }else {
  return fetch("https://intense-tundra-74441.herokuapp.com/games", {
    method: "post",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify(
      {'nickname': nickname , 'guesses': clicks})
    })
    .then(res => res.json())
    .then(json => console.log(json.user.nickname, json))
  }
}

main()

function main(){

  welcome()
}
