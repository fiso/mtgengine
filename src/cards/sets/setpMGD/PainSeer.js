"use strict";
const Constants = require ("../../../Constants");
const PainSeerBase = require("../setBNG/PainSeer");

class PainSeer extends PainSeerBase {
  constructor(game) {
    super(game, "Pain Seer", "Magic Game Day", "pMGD");
  }
}

module.exports = PainSeer;
