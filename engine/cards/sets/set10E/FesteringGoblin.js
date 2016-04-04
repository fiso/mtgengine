"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FesteringGoblinBase = require("../setARC/FesteringGoblin.js");

class FesteringGoblin extends FesteringGoblinBase {
  constructor(game) {
    super(game, "Festering Goblin", "Tenth Edition", "10E");
  }
}

module.exports = FesteringGoblin;
