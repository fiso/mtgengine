"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setEMA/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = ProdigalSorcerer;
