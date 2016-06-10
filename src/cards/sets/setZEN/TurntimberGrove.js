"use strict";
const Constants = require ("../../../Constants");
const TurntimberGroveBase = require("../setDDP/TurntimberGrove");

class TurntimberGrove extends TurntimberGroveBase {
  constructor (game) {
    super(game, "Turntimber Grove", "Zendikar", "ZEN");
  }
}

module.exports = TurntimberGrove;
