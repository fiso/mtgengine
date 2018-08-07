"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setEMA/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "Friday Night Magic 2000", "FNM");
  }
}

module.exports = ProdigalSorcerer;
