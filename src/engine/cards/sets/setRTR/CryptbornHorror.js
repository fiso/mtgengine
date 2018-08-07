"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptbornHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptborn Horror", "Return to Ravnica", "RTR");
  }
}

module.exports = CryptbornHorror;
