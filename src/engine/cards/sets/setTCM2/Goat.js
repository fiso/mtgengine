"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Goat extends UnimplementedCard {
  constructor (game) {
    super(game, "Goat", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Goat;
