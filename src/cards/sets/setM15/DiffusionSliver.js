"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiffusionSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Diffusion Sliver", "Magic 2015", "M15");
  }
}

module.exports = DiffusionSliver;
