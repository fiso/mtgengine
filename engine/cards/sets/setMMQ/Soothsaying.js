"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soothsaying extends UnimplementedCard {
  constructor(game) {
    super(game, "Soothsaying", "Mercadian Masques", "MMQ");
  }
}

module.exports = Soothsaying;
