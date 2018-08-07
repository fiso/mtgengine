"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseDemise extends UnimplementedCard {
  constructor (game) {
    super(game, "False Demise", "Mercadian Masques", "MMQ");
  }
}

module.exports = FalseDemise;
