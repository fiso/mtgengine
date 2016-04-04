"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sangromancer extends Card {
  constructor(game) {
    super(game, "Sangromancer", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Sangromancer;
