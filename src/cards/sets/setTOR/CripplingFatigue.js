"use strict";
const Constants = require ("../../../Constants");
const CripplingFatigueBase = require("../setPHUK/CripplingFatigue");

class CripplingFatigue extends CripplingFatigueBase {
  constructor (game) {
    super(game, "Crippling Fatigue", "Torment", "TOR");
  }
}

module.exports = CripplingFatigue;
