"use strict";
const Constants = require ("../../../Constants");
const KrosanGripBase = require("../setCMA/KrosanGrip");

class KrosanGrip extends KrosanGripBase {
  constructor (game) {
    super(game, "Krosan Grip", "Commander 2013", "C13");
  }
}

module.exports = KrosanGrip;
