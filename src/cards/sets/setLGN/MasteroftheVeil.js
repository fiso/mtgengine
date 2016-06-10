"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasteroftheVeil extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of the Veil", "Legions", "LGN");
  }
}

module.exports = MasteroftheVeil;
