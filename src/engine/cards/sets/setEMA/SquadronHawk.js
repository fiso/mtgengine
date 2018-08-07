"use strict";
const Constants = require ("../../../Constants");
const SquadronHawkBase = require("../setA25/SquadronHawk");

class SquadronHawk extends SquadronHawkBase {
  constructor (game) {
    super(game, "Squadron Hawk", "Eternal Masters", "EMA");
  }
}

module.exports = SquadronHawk;
