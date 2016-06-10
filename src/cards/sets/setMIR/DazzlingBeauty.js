"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DazzlingBeauty extends UnimplementedCard {
  constructor (game) {
    super(game, "Dazzling Beauty", "Mirage", "MIR");
  }
}

module.exports = DazzlingBeauty;
