"use strict";
const Constants = require ("../../../Constants");
const LeviathanBase = require("../setTSB/Leviathan");

class Leviathan extends LeviathanBase {
  constructor (game) {
    super(game, "Leviathan", "Fourth Edition", "4ED");
  }
}

module.exports = Leviathan;
