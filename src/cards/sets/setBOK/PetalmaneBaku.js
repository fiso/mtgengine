"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PetalmaneBaku extends UnimplementedCard {
  constructor (game) {
    super(game, "Petalmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PetalmaneBaku;
