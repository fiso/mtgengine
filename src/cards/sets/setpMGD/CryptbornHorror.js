"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptbornHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptborn Horror", "Magic Game Day", "pMGD");
  }
}

module.exports = CryptbornHorror;
