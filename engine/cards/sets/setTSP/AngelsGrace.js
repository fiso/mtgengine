"use strict";
const Constants = require ("../../../Constants");
const AngelsGraceBase = require("../setMMA/AngelsGrace");

class AngelsGrace extends AngelsGraceBase {
  constructor(game) {
    super(game, "Angel's Grace", "Time Spiral", "TSP");
  }
}

module.exports = AngelsGrace;
