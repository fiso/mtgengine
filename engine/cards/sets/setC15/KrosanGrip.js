"use strict";
const Constants = require ("../../../Constants");
const KrosanGripBase = require("../setC13/KrosanGrip");

class KrosanGrip extends KrosanGripBase {
  constructor(game) {
    super(game, "Krosan Grip", "Commander 2015", "C15");
  }
}

module.exports = KrosanGrip;
