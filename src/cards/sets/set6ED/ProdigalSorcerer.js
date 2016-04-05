"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setBRB/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor(game) {
    super(game, "Prodigal Sorcerer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ProdigalSorcerer;
