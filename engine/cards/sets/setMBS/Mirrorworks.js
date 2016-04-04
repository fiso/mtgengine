"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mirrorworks extends Card {
  constructor(game) {
    super(game, "Mirrorworks", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Mirrorworks;
