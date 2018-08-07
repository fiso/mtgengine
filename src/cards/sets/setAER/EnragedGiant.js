"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnragedGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Enraged Giant", "Aether Revolt", "AER");
  }
}

module.exports = EnragedGiant;
