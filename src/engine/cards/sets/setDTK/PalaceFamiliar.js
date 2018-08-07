"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalaceFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Palace Familiar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = PalaceFamiliar;
