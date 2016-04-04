"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreatureGuy extends Card {
  constructor(game) {
    super(game, "Creature Guy", "Unhinged", "UNH");
  }
}

module.exports = CreatureGuy;
