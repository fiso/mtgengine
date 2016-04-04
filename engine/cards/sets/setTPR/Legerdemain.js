"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LegerdemainBase = require("../setTMP/Legerdemain.js");

class Legerdemain extends LegerdemainBase {
  constructor(game) {
    super(game, "Legerdemain", "Tempest Remastered", "TPR");
  }
}

module.exports = Legerdemain;
