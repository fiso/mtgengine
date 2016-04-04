"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirDoppelgangerBase = require("../setCNS/DimirDoppelganger.js");

class DimirDoppelganger extends DimirDoppelgangerBase {
  constructor(game) {
    super(game, "Dimir Doppelganger", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirDoppelganger;
