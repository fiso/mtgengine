"use strict";
const Constants = require ("../../../Constants");
const MoggInfestationBase = require("../setTPR/MoggInfestation");

class MoggInfestation extends MoggInfestationBase {
  constructor (game) {
    super(game, "Mogg Infestation", "Stronghold", "STH");
  }
}

module.exports = MoggInfestation;
