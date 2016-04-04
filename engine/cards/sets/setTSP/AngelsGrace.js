"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsGraceBase = require("../setMMA/AngelsGrace.js");

class AngelsGrace extends AngelsGraceBase {
  constructor(game) {
    super(game, "Angel's Grace", "Time Spiral", "TSP");
  }
}

module.exports = AngelsGrace;
