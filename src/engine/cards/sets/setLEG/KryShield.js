"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KryShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Kry Shield", "Legends", "LEG");
  }
}

module.exports = KryShield;
