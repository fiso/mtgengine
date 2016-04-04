"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InquisitorsSnare extends Card {
  constructor(game) {
    super(game, "Inquisitor's Snare", "Shadowmoor", "SHM");
  }
}

module.exports = InquisitorsSnare;
