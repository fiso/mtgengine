"use strict";
const Constants = require ("../../../Constants");
const VictimizeBase = require("../setCMA/Victimize");

class Victimize extends VictimizeBase {
  constructor (game) {
    super(game, "Victimize", "Urza's Saga", "USG");
  }
}

module.exports = Victimize;
