"use strict";
const Constants = require ("../../../Constants");
const OrzhovSignetBase = require("../setC18/OrzhovSignet");

class OrzhovSignet extends OrzhovSignetBase {
  constructor (game) {
    super(game, "Orzhov Signet", "Commander 2016", "C16");
  }
}

module.exports = OrzhovSignet;
