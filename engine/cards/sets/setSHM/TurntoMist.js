"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntoMist extends Card {
  constructor(game) {
    super(game, "Turn to Mist", "Shadowmoor", "SHM");
  }
}

module.exports = TurntoMist;
