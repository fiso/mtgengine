"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonehewerGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonehewer Giant", "Modern Masters", "MMA");
  }
}

module.exports = StonehewerGiant;
