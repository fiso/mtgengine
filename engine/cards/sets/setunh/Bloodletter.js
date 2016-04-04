"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bloodletter extends Card {
  constructor(game) {
    super(game, "Bloodletter", "Unhinged", "UNH");
  }
}

module.exports = Bloodletter;
