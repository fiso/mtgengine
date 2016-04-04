"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterWarcraft extends Card {
  constructor(game) {
    super(game, "Master Warcraft", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MasterWarcraft;
