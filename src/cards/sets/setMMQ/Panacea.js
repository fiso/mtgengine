"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Panacea extends UnimplementedCard {
  constructor (game) {
    super(game, "Panacea", "Mercadian Masques", "MMQ");
  }
}

module.exports = Panacea;
