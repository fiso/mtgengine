"use strict";
const Constants = require ("../../../Constants");
const ProdigalSorcererBase = require("../setBRB/ProdigalSorcerer");

class ProdigalSorcerer extends ProdigalSorcererBase {
  constructor (game) {
    super(game, "Prodigal Sorcerer", "Unlimited Edition", "2ED");
  }
}

module.exports = ProdigalSorcerer;
