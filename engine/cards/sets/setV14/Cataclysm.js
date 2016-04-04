"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CataclysmBase = require("../setEXO/Cataclysm.js");

class Cataclysm extends CataclysmBase {
  constructor(game) {
    super(game, "Cataclysm", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Cataclysm;
