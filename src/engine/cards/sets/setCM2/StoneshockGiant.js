"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneshockGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoneshock Giant", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = StoneshockGiant;
