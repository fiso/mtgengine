"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenalishLancerBase = require("../setDDG/BenalishLancer.js");

class BenalishLancer extends BenalishLancerBase {
  constructor(game) {
    super(game, "Benalish Lancer", "Invasion", "INV");
  }
}

module.exports = BenalishLancer;
