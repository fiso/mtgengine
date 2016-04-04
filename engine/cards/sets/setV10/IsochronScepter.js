"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IsochronScepterBase = require("../setDDJ/IsochronScepter.js");

class IsochronScepter extends IsochronScepterBase {
  constructor(game) {
    super(game, "Isochron Scepter", "From the Vault: Relics", "V10");
  }
}

module.exports = IsochronScepter;
