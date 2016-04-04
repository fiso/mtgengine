"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelUltimatumBase = require("../setC13/CruelUltimatum.js");

class CruelUltimatum extends CruelUltimatumBase {
  constructor(game) {
    super(game, "Cruel Ultimatum", "From the Vault: Twenty", "V13");
  }
}

module.exports = CruelUltimatum;
