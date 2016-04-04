"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScoutingTrek extends Card {
  constructor(game) {
    super(game, "Scouting Trek", "Invasion", "INV");
  }
}

module.exports = ScoutingTrek;
