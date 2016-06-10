"use strict";
const Constants = require ("../../../Constants");
const MartialCoupBase = require("../setC14/MartialCoup");

class MartialCoup extends MartialCoupBase {
  constructor (game) {
    super(game, "Martial Coup", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = MartialCoup;
