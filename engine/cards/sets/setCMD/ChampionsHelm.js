"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionsHelm extends Card {
  constructor(game) {
    super(game, "Champion's Helm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChampionsHelm;
