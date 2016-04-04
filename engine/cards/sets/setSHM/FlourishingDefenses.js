"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlourishingDefenses extends Card {
  constructor(game) {
    super(game, "Flourishing Defenses", "Shadowmoor", "SHM");
  }
}

module.exports = FlourishingDefenses;
