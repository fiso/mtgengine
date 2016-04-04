"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodrageVampireBase = require("../setDDK/BloodrageVampire.js");

class BloodrageVampire extends BloodrageVampireBase {
  constructor(game) {
    super(game, "Bloodrage Vampire", "Magic 2012", "M12");
  }
}

module.exports = BloodrageVampire;
