"use strict";
const Constants = require ("../../../Constants");
const CataclysmBase = require("../setTPR/Cataclysm");

class Cataclysm extends CataclysmBase {
  constructor (game) {
    super(game, "Cataclysm", "From the Vault: Annihilation", "V14");
  }
}

module.exports = Cataclysm;
