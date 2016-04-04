"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContaminatedBondBase = require("../setMRD/ContaminatedBond.js");

class ContaminatedBond extends ContaminatedBondBase {
  constructor(game) {
    super(game, "Contaminated Bond", "Ninth Edition", "9ED");
  }
}

module.exports = ContaminatedBond;
