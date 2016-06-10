"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockSlide extends UnimplementedCard {
  constructor (game) {
    super(game, "Rock Slide", "Visions", "VIS");
  }
}

module.exports = RockSlide;
