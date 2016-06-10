"use strict";
const Constants = require ("../../../Constants");
const KrosanGripBase = require("../setC13/KrosanGrip");

class KrosanGrip extends KrosanGripBase {
  constructor (game) {
    super(game, "Krosan Grip", "Time Spiral", "TSP");
  }
}

module.exports = KrosanGrip;
