"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisruptiveStudent extends Card {
  constructor(game) {
    super(game, "Disruptive Student", "Battle Royale Box Set", "BRB");
  }
}

module.exports = DisruptiveStudent;
