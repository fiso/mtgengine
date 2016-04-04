"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoobyTrapBase = require("../set9ED/BoobyTrap.js");

class BoobyTrap extends BoobyTrapBase {
  constructor(game) {
    super(game, "Booby Trap", "Tempest", "TMP");
  }
}

module.exports = BoobyTrap;
