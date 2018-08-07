"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setEMA/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "Fourth Edition", "4ED");
  }
}

module.exports = ProdigalSorcerer;
