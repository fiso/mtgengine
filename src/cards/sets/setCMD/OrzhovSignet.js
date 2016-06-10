"use strict";
const Constants = require ("../../../Constants");
const OrzhovSignetBase = require("../setC15/OrzhovSignet");

class OrzhovSignet extends OrzhovSignetBase {
  constructor (game) {
    super(game, "Orzhov Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OrzhovSignet;
