"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Warden", "Commander Anthology", "CMA");
  }
}

module.exports = EssenceWarden;
