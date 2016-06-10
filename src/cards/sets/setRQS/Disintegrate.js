"use strict";
const Constants = require ("../../../Constants");
const DisintegrateBase = require("../setCED/Disintegrate");

class Disintegrate extends DisintegrateBase {
  constructor (game) {
    super(game, "Disintegrate", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = Disintegrate;
