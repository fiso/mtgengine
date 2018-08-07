"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadshipReef extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreadship Reef", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DreadshipReef;
