"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Renounce extends UnimplementedCard {
  constructor(game) {
    super(game, "Renounce", "Mercadian Masques", "MMQ");
  }
}

module.exports = Renounce;
