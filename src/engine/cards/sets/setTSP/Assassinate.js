"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setBBD/Assassinate");

class Assassinate extends AssassinateBase {
  constructor (game) {
    super(game, "Assassinate", "Time Spiral", "TSP");
  }
}

module.exports = Assassinate;
