"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurntimberGroveBase = require("../setDDP/TurntimberGrove.js");

class TurntimberGrove extends TurntimberGroveBase {
  constructor(game) {
    super(game, "Turntimber Grove", "Zendikar", "ZEN");
  }
}

module.exports = TurntimberGrove;
