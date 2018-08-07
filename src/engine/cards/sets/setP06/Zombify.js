"use strict";
const Constants = require ("../../../Constants");
const ZombifyBase = require("../setA25/Zombify");

class Zombify extends ZombifyBase {
  constructor (game) {
    super(game, "Zombify", "Magic Player Rewards 2006", "P06");
  }
}

module.exports = Zombify;
