"use strict";
const Constants = require ("../../../Constants");
const VictimizeBase = require("../setCMA/Victimize");

class Victimize extends VictimizeBase {
  constructor (game) {
    super(game, "Victimize", "Conspiracy", "CNS");
  }
}

module.exports = Victimize;
