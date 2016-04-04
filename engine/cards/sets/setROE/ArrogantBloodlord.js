"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArrogantBloodlord extends Card {
  constructor(game) {
    super(game, "Arrogant Bloodlord", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ArrogantBloodlord;
