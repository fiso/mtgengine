"use strict";
const Constants = require ("../../../Constants");
const IsochronScepterBase = require("../setDDJ/IsochronScepter");

class IsochronScepter extends IsochronScepterBase {
  constructor (game) {
    super(game, "Isochron Scepter", "From the Vault: Relics", "V10");
  }
}

module.exports = IsochronScepter;
