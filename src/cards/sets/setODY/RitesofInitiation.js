"use strict";
const Constants = require ("../../../Constants");
const RitesofInitiationBase = require("../setVMA/RitesofInitiation");

class RitesofInitiation extends RitesofInitiationBase {
  constructor (game) {
    super(game, "Rites of Initiation", "Odyssey", "ODY");
  }
}

module.exports = RitesofInitiation;
