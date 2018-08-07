"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eldrazi extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = Eldrazi;
