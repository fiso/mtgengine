"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinCadetsBase = require("../setCMD/GoblinCadets.js");

class GoblinCadets extends GoblinCadetsBase {
  constructor(game) {
    super(game, "Goblin Cadets", "Urza's Saga", "USG");
  }
}

module.exports = GoblinCadets;
