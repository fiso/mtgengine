"use strict";
const Constants = require ("../../../Constants");
const KrosanGripBase = require("../setC13/KrosanGrip");

class KrosanGrip extends KrosanGripBase {
  constructor (game) {
    super(game, "Krosan Grip", "Modern Masters", "MMA");
  }
}

module.exports = KrosanGrip;
