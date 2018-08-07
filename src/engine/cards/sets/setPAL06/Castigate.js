"use strict";
const Constants = require ("../../../Constants");
const CastigateBase = require("../setGPT/Castigate");

class Castigate extends CastigateBase {
  constructor (game) {
    super(game, "Castigate", "Arena League 2006", "PAL06");
  }
}

module.exports = Castigate;
