"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FactorFictionBase = require("../setC15/FactorFiction.js");

class FactorFiction extends FactorFictionBase {
  constructor(game) {
    super(game, "Fact or Fiction", "From the Vault: Twenty", "V13");
  }
}

module.exports = FactorFiction;
