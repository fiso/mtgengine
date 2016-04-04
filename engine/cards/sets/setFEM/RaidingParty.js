"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaidingParty extends Card {
  constructor(game) {
    super(game, "Raiding Party", "Fallen Empires", "FEM");
  }
}

module.exports = RaidingParty;
