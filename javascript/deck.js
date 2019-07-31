class Deck {
    constructor() {
        this.freshDeck = [//CLUBS
            {faceValue: 2, url: "../images/cards/2C.png" },
            {faceValue: 3, url: "../images/cards/3C.png" },
            {faceValue: 4, url: "../images/cards/4C.png" },
            {faceValue: 5, url: "../images/cards/5C.png" },
            {faceValue: 6, url: "../images/cards/6C.png" },
            {faceValue: 7, url: "../images/cards/7C.png" },
            {faceValue: 8, url: "../images/cards/8C.png" },
            {faceValue: 9, url: "../images/cards/9C.png" },
            {faceValue: 10, url: "../images/cards/10C.png" },
            {faceValue: 11, url: "../images/cards/JC.png" },
            {faceValue: 12, url: "../images/cards/QC.png" },
            {faceValue: 13, url: "../images/cards/KC.png" },
            {faceValue: 14, url: "../images/cards/AC.png" },
            //DIAMONDS
            {faceValue: 2, url: "../images/cards/2D.png" },
            {faceValue: 3, url: "../images/cards/3D.png" },
            {faceValue: 4, url: "../images/cards/4D.png" },
            {faceValue: 5, url: "../images/cards/5D.png" },
            {faceValue: 6, url: "../images/cards/6D.png" },
            {faceValue: 7, url: "../images/cards/7D.png" },
            {faceValue: 8, url: "../images/cards/8D.png" },
            {faceValue: 9, url: "../images/cards/9D.png" },
            {faceValue: 10, url: "../images/cards/10D.png" },
            {faceValue: 11, url: "../images/cards/JD.png" },
            {faceValue: 12, url: "../images/cards/QD.png" },
            {faceValue: 13, url: "../images/cards/KD.png" },
            {faceValue: 14, url: "../images/cards/AD.png" },
            //HEARTS
            {faceValue: 2, url: "../images/cards/2H.png" },
            {faceValue: 3, url: "../images/cards/3H.png" },
            {faceValue: 4, url: "../images/cards/4H.png" },
            {faceValue: 5, url: "../images/cards/5H.png" },
            {faceValue: 6, url: "../images/cards/6H.png" },
            {faceValue: 7, url: "../images/cards/7H.png" },
            {faceValue: 8, url: "../images/cards/8H.png" },
            {faceValue: 9, url: "../images/cards/9H.png" },
            {faceValue: 10, url: "../images/cards/10H.png" },
            {faceValue: 11, url: "../images/cards/JH.png" },
            {faceValue: 12, url: "../images/cards/QH.png" },
            {faceValue: 13, url: "../images/cards/KH.png" },
            {faceValue: 14, url: "../images/cards/AH.png" },
            //SPADES
            {faceValue: 2, url: "../images/cards/2S.png" },
            {faceValue: 3, url: "../images/cards/3S.png" },
            {faceValue: 4, url: "../images/cards/4S.png" },
            {faceValue: 5, url: "../images/cards/5S.png" },
            {faceValue: 6, url: "../images/cards/6S.png" },
            {faceValue: 7, url: "../images/cards/7S.png" },
            {faceValue: 8, url: "../images/cards/8S.png" },
            {faceValue: 9, url: "../images/cards/9S.png" },
            {faceValue: 10, url: "../images/cards/10S.png" },
            {faceValue: 11, url: "../images/cards/JS.png" },
            {faceValue: 12, url: "../images/cards/QS.png" },
            {faceValue: 13, url: "../images/cards/KS.png" },
            {faceValue: 14, url: "../images/cards/AS.png" },
            ]


        this.current = this.freshDeck
        this.base = []
    }

    shuffle() {
        let deck = this.current;
        let m = deck.length, i;

        while (m) {
          i = Math.floor(Math.random() * m--);

          [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        this.current = deck
        return deck;
       }

    deal(){
      return this.current.pop();
     }

}
