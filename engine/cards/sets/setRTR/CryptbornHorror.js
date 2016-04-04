"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CryptbornHorrorBase = require("../setpMGD/CryptbornHorror.js");

class CryptbornHorror extends CryptbornHorrorBase {
  constructor(game) {
    super(game, "Cryptborn Horror", "Return to Ravnica", "RTR");
  }
}

module.exports = CryptbornHorror;
