"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelUltimatumBase = require("../setC13/CruelUltimatum.js");

class CruelUltimatum extends CruelUltimatumBase {
  constructor(game) {
    super(game, "Cruel Ultimatum", "Shards of Alara", "ALA");
  }
}

module.exports = CruelUltimatum;
