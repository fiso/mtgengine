"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerpentsGift extends UnimplementedCard {
  constructor (game) {
    super(game, "Serpent's Gift", "Magic 2013", "M13");
  }
}

module.exports = SerpentsGift;
