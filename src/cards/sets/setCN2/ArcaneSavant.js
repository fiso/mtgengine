"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Savant", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ArcaneSavant;
