"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptbornHorror extends Card {
  constructor(game) {
    super(game, "Cryptborn Horror", "Magic Game Day", "pMGD");
  }
}

module.exports = CryptbornHorror;
