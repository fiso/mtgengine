"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Memoricide extends UnimplementedCard {
  constructor (game) {
    super(game, "Memoricide", "Media Inserts", "pMEI");
  }
}

module.exports = Memoricide;
