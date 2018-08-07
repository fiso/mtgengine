"use strict";
const Constants = require ("../../../Constants");
const OrzhovSignetBase = require("../setC18/OrzhovSignet");

class OrzhovSignet extends OrzhovSignetBase {
  constructor (game) {
    super(game, "Orzhov Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = OrzhovSignet;
