"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiplomaticImmunity extends UnimplementedCard {
  constructor (game) {
    super(game, "Diplomatic Immunity", "Mercadian Masques", "MMQ");
  }
}

module.exports = DiplomaticImmunity;
