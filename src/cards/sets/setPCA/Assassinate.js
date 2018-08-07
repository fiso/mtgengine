"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setBBD/Assassinate");

class Assassinate extends AssassinateBase {
  constructor (game) {
    super(game, "Assassinate", "Planechase Anthology", "PCA");
  }
}

module.exports = Assassinate;
