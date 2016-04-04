"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlustersquallBase = require("../setC15/Blustersquall.js");

class Blustersquall extends BlustersquallBase {
  constructor(game) {
    super(game, "Blustersquall", "Return to Ravnica", "RTR");
  }
}

module.exports = Blustersquall;
