"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HydraOmnivore extends Card {
  constructor(game) {
    super(game, "Hydra Omnivore", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HydraOmnivore;
