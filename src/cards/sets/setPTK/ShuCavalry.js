"use strict";
const Constants = require ("../../../Constants");
const ShuCavalryBase = require("../setME3/ShuCavalry");

class ShuCavalry extends ShuCavalryBase {
  constructor (game) {
    super(game, "Shu Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuCavalry;
