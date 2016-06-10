"use strict";
const Constants = require ("../../../Constants");
const BloodrageVampireBase = require("../setDDK/BloodrageVampire");

class BloodrageVampire extends BloodrageVampireBase {
  constructor (game) {
    super(game, "Bloodrage Vampire", "Magic 2012", "M12");
  }
}

module.exports = BloodrageVampire;
