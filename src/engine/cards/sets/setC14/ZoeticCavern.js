"use strict";
const Constants = require ("../../../Constants");
const ZoeticCavernBase = require("../setA25/ZoeticCavern");

class ZoeticCavern extends ZoeticCavernBase {
  constructor (game) {
    super(game, "Zoetic Cavern", "Commander 2014", "C14");
  }
}

module.exports = ZoeticCavern;
