"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiplomaticEscort extends UnimplementedCard {
  constructor(game) {
    super(game, "Diplomatic Escort", "Mercadian Masques", "MMQ");
  }
}

module.exports = DiplomaticEscort;
