"use strict";
const Constants = require ("../../../Constants");
const ThopterSquadronBase = require("../setTPR/ThopterSquadron");

class ThopterSquadron extends ThopterSquadronBase {
  constructor (game) {
    super(game, "Thopter Squadron", "Vintage Masters", "VMA");
  }
}

module.exports = ThopterSquadron;
