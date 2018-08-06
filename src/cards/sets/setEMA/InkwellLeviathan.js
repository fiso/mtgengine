"use strict";
const Constants = require ("../../../Constants");
const InkwellLeviathanBase = require("../setCON/InkwellLeviathan");

class InkwellLeviathan extends InkwellLeviathanBase {
  constructor (game) {
    super(game, "Inkwell Leviathan", "Eternal Masters", "EMA");
  }
}

module.exports = InkwellLeviathan;
