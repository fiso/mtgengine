"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stamina extends UnimplementedCard {
  constructor (game) {
    super(game, "Stamina", "Mercadian Masques", "MMQ");
  }
}

module.exports = Stamina;
