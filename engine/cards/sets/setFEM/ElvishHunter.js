"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishHunter extends Card {
  constructor(game) {
    super(game, "Elvish Hunter", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishHunter;
