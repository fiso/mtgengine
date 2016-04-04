"use strict";
const Constants = require ("../../../Constants");
const CryptbornHorrorBase = require("../setpMGD/CryptbornHorror");

class CryptbornHorror extends CryptbornHorrorBase {
  constructor(game) {
    super(game, "Cryptborn Horror", "Return to Ravnica", "RTR");
  }
}

module.exports = CryptbornHorror;
