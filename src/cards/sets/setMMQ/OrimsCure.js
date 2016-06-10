"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsCure extends UnimplementedCard {
  constructor (game) {
    super(game, "Orim's Cure", "Mercadian Masques", "MMQ");
  }
}

module.exports = OrimsCure;
