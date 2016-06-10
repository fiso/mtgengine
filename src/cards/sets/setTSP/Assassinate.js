"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setM10/Assassinate");

class Assassinate extends AssassinateBase {
  constructor (game) {
    super(game, "Assassinate", "Time Spiral", "TSP");
  }
}

module.exports = Assassinate;
