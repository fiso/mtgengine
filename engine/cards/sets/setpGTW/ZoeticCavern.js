"use strict";
const Constants = require ("../../../Constants");
const ZoeticCavernBase = require("../setC14/ZoeticCavern");

class ZoeticCavern extends ZoeticCavernBase {
  constructor(game) {
    super(game, "Zoetic Cavern", "Gateway", "pGTW");
  }
}

module.exports = ZoeticCavern;
