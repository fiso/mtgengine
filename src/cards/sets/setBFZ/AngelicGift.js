"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicGift extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Gift", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AngelicGift;
