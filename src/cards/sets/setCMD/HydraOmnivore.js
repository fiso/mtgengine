"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydraOmnivore extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydra Omnivore", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HydraOmnivore;
