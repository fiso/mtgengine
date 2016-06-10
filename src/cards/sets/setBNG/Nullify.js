"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nullify extends UnimplementedCard {
  constructor (game) {
    super(game, "Nullify", "Born of the Gods", "BNG");
  }
}

module.exports = Nullify;
