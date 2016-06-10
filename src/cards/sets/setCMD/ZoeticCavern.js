"use strict";
const Constants = require ("../../../Constants");
const ZoeticCavernBase = require("../setC14/ZoeticCavern");

class ZoeticCavern extends ZoeticCavernBase {
  constructor (game) {
    super(game, "Zoetic Cavern", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ZoeticCavern;
