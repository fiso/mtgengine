"use strict";
const Constants = require ("../../../Constants");
const AssassinateBase = require("../setBBD/Assassinate");

class Assassinate extends AssassinateBase {
  constructor (game) {
    super(game, "Assassinate", "Magic 2011", "M11");
  }
}

module.exports = Assassinate;
