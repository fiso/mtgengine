"use strict";
const Constants = require ("../../../Constants");
const SeaSpiritBase = require("../setME2/SeaSpirit");

class SeaSpirit extends SeaSpiritBase {
  constructor (game) {
    super(game, "Sea Spirit", "Ice Age", "ICE");
  }
}

module.exports = SeaSpirit;
