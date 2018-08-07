"use strict";
const Constants = require ("../../../Constants");
const BitterFeudBase = require("../setCM2/BitterFeud");

class BitterFeud extends BitterFeudBase {
  constructor (game) {
    super(game, "Bitter Feud", "Commander 2014", "C14");
  }
}

module.exports = BitterFeud;
