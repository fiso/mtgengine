"use strict";
const Constants = require ("../../../Constants");
const SquadronHawkBase = require("../setpFNM/SquadronHawk");

class SquadronHawk extends SquadronHawkBase {
  constructor (game) {
    super(game, "Squadron Hawk", "Magic 2011", "M11");
  }
}

module.exports = SquadronHawk;
