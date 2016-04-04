"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloneShell extends Card {
  constructor(game) {
    super(game, "Clone Shell", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CloneShell;
