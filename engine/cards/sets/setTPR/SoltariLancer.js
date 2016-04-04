"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariLancerBase = require("../setTMP/SoltariLancer.js");

class SoltariLancer extends SoltariLancerBase {
  constructor(game) {
    super(game, "Soltari Lancer", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariLancer;
