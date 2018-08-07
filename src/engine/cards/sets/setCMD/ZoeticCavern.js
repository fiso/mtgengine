"use strict";
const Constants = require ("../../../Constants");
const ZoeticCavernBase = require("../setA25/ZoeticCavern");

class ZoeticCavern extends ZoeticCavernBase {
  constructor (game) {
    super(game, "Zoetic Cavern", "Commander 2011", "CMD");
  }
}

module.exports = ZoeticCavern;
