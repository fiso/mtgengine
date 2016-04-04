"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PineBarrensBase = require("../setTMP/PineBarrens.js");

class PineBarrens extends PineBarrensBase {
  constructor(game) {
    super(game, "Pine Barrens", "Tempest Remastered", "TPR");
  }
}

module.exports = PineBarrens;
