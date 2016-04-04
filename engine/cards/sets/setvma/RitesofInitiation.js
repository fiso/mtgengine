"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RitesofInitiationBase = require("../setODY/RitesofInitiation.js");

class RitesofInitiation extends RitesofInitiationBase {
  constructor(game) {
    super(game, "Rites of Initiation", "Vintage Masters", "VMA");
  }
}

module.exports = RitesofInitiation;
