"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Frost Giant", "Masters Edition III", "ME3");
  }
}

module.exports = FrostGiant;
