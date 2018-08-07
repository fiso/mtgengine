"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveUnconscious extends UnimplementedCard {
  constructor (game) {
    super(game, "Collective Unconscious", "Commander Anthology", "CMA");
  }
}

module.exports = CollectiveUnconscious;
