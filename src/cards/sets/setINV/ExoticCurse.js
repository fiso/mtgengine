"use strict";
const Constants = require ("../../../Constants");
const ExoticCurseBase = require("../setDDE/ExoticCurse");

class ExoticCurse extends ExoticCurseBase {
  constructor (game) {
    super(game, "Exotic Curse", "Invasion", "INV");
  }
}

module.exports = ExoticCurse;
