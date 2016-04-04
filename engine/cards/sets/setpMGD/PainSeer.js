"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PainSeerBase = require("../setBNG/PainSeer.js");

class PainSeer extends PainSeerBase {
  constructor(game) {
    super(game, "Pain Seer", "Magic Game Day", "pMGD");
  }
}

module.exports = PainSeer;
