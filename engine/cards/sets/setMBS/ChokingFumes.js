"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChokingFumes extends Card {
  constructor(game) {
    super(game, "Choking Fumes", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ChokingFumes;
