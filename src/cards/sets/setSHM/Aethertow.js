"use strict";
const Constants = require ("../../../Constants");
const AethertowBase = require("../setMM3/Aethertow");

class Aethertow extends AethertowBase {
  constructor (game) {
    super(game, "Aethertow", "Shadowmoor", "SHM");
  }
}

module.exports = Aethertow;
