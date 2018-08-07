"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderingGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Thundering Giant", "Welcome Deck 2017", "W17");
  }
}

module.exports = ThunderingGiant;
