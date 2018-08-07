"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Germ extends UnimplementedCard {
  constructor (game) {
    super(game, "Germ", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Germ;
