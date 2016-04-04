"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PardicDragonBase = require("../setMMA/PardicDragon.js");

class PardicDragon extends PardicDragonBase {
  constructor(game) {
    super(game, "Pardic Dragon", "Time Spiral", "TSP");
  }
}

module.exports = PardicDragon;
