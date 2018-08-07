"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "The Savant", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheSavant;
