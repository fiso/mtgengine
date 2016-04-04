"use strict";
const Constants = require ("../../../Constants");
const SeaSpiritBase = require("../set5ED/SeaSpirit");

class SeaSpirit extends SeaSpiritBase {
  constructor(game) {
    super(game, "Sea Spirit", "Ice Age", "ICE");
  }
}

module.exports = SeaSpirit;
