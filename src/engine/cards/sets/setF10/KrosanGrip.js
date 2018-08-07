"use strict";
const Constants = require ("../../../Constants");
const KrosanGripBase = require("../setCMA/KrosanGrip");

class KrosanGrip extends KrosanGripBase {
  constructor (game) {
    super(game, "Krosan Grip", "Friday Night Magic 2010", "F10");
  }
}

module.exports = KrosanGrip;
