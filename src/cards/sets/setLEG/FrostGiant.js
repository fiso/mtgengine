"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Frost Giant", "Legends", "LEG");
  }
}

module.exports = FrostGiant;
