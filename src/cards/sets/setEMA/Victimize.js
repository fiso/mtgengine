"use strict";
const Constants = require ("../../../Constants");
const VictimizeBase = require("../setC14/Victimize");

class Victimize extends VictimizeBase {
  constructor (game) {
    super(game, "Victimize", "Eternal Masters", "EMA");
  }
}

module.exports = Victimize;
