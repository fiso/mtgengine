"use strict";
const Constants = require ("../../../Constants");
const ZombifyBase = require("../setA25/Zombify");

class Zombify extends ZombifyBase {
  constructor (game) {
    super(game, "Zombify", "Archenemy", "ARC");
  }
}

module.exports = Zombify;
