"use strict";
const Constants = require ("../../../Constants");
const ZoeticCavernBase = require("../setC14/ZoeticCavern");

class ZoeticCavern extends ZoeticCavernBase {
  constructor(game) {
    super(game, "Zoetic Cavern", "Commander 2015", "C15");
  }
}

module.exports = ZoeticCavern;
