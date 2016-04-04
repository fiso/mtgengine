"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SanctimonyBase = require("../set8ED/Sanctimony.js");

class Sanctimony extends SanctimonyBase {
  constructor(game) {
    super(game, "Sanctimony", "Urza's Destiny", "UDS");
  }
}

module.exports = Sanctimony;
