"use strict";
const Constants = require ("../../../Constants");
const RitesofInitiationBase = require("../setODY/RitesofInitiation");

class RitesofInitiation extends RitesofInitiationBase {
  constructor (game) {
    super(game, "Rites of Initiation", "Vintage Masters", "VMA");
  }
}

module.exports = RitesofInitiation;
