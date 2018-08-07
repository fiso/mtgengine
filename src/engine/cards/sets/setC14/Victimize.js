"use strict";
const Constants = require ("../../../Constants");
const VictimizeBase = require("../setCMA/Victimize");

class Victimize extends VictimizeBase {
  constructor (game) {
    super(game, "Victimize", "Commander 2014", "C14");
  }
}

module.exports = Victimize;
