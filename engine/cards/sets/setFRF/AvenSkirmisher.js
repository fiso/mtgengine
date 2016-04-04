"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenSkirmisher extends Card {
  constructor(game) {
    super(game, "Aven Skirmisher", "Fate Reforged", "FRF");
  }
}

module.exports = AvenSkirmisher;
