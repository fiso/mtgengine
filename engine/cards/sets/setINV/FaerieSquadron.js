"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieSquadron extends Card {
  constructor(game) {
    super(game, "Faerie Squadron", "Invasion", "INV");
  }
}

module.exports = FaerieSquadron;
