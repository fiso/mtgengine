"use strict";
const Constants = require ("../../../Constants");
const PardicDragonBase = require("../setMMA/PardicDragon");

class PardicDragon extends PardicDragonBase {
  constructor (game) {
    super(game, "Pardic Dragon", "Time Spiral", "TSP");
  }
}

module.exports = PardicDragon;
