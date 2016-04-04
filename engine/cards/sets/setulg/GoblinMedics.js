"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinMedics extends Card {
  constructor(game) {
    super(game, "Goblin Medics", "Urza's Legacy", "ULG");
  }
}

module.exports = GoblinMedics;
