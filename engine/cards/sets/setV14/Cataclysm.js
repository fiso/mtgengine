"use strict";
const Constants = require ("../../../Constants");
const CataclysmBase = require("../setEXO/Cataclysm");

class Cataclysm extends CataclysmBase {
  constructor(game) {
    super(game, "Cataclysm", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Cataclysm;
