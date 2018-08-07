"use strict";
const Constants = require ("../../../Constants");
const BloodbondVampireBase = require("../setE02/BloodbondVampire");

class BloodbondVampire extends BloodbondVampireBase {
  constructor (game) {
    super(game, "Bloodbond Vampire", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BloodbondVampire;
