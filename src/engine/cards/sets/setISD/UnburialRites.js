"use strict";
const Constants = require ("../../../Constants");
const UnburialRitesBase = require("../setMM3/UnburialRites");

class UnburialRites extends UnburialRitesBase {
  constructor (game) {
    super(game, "Unburial Rites", "Innistrad", "ISD");
  }
}

module.exports = UnburialRites;
