"use strict";
const Constants = require ("../../../Constants");
const CleaverRiotBase = require("../setDDT/CleaverRiot");

class CleaverRiot extends CleaverRiotBase {
  constructor (game) {
    super(game, "Cleaver Riot", "Magic 2013", "M13");
  }
}

module.exports = CleaverRiot;
