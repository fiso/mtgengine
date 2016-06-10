"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkywingAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Skywing Aven", "Torment", "TOR");
  }
}

module.exports = SkywingAven;
