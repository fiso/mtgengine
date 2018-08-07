"use strict";
const Constants = require ("../../../Constants");
const CryptbornHorrorBase = require("../setRTR/CryptbornHorror");

class CryptbornHorror extends CryptbornHorrorBase {
  constructor (game) {
    super(game, "Cryptborn Horror", "Magic Online Promos", "PRM");
  }
}

module.exports = CryptbornHorror;
