"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setBBD/Assassinate");

class Assassinate extends AssassinateBase {
  constructor (game) {
    super(game, "Assassinate", "Planechase 2012", "PC2");
  }
}

module.exports = Assassinate;
