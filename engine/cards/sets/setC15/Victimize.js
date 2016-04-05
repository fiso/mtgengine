"use strict";
const Constants = require ("../../../Constants");
const VictimizeBase = require("../setC14/Victimize");

class Victimize extends VictimizeBase {
  constructor(game) {
    super(game, "Victimize", "Commander 2015", "C15");
  }
}

module.exports = Victimize;
