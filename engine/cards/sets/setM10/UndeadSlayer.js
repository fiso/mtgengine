"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndeadSlayer extends Card {
  constructor(game) {
    super(game, "Undead Slayer", "Magic 2010", "M10");
  }
}

module.exports = UndeadSlayer;
