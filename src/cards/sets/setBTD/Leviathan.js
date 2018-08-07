"use strict";
const Constants = require ("../../../Constants");
const LeviathanBase = require("../setTSB/Leviathan");

class Leviathan extends LeviathanBase {
  constructor (game) {
    super(game, "Leviathan", "Beatdown Box Set", "BTD");
  }
}

module.exports = Leviathan;
