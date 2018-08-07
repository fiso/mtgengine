"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TahCropSkirmisherToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Tah-Crop Skirmisher Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = TahCropSkirmisherToken;
