"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroicReinforcements extends UnimplementedCard {
  constructor (game) {
    super(game, "Heroic Reinforcements", "Core Set 2019", "M19");
  }
}

module.exports = HeroicReinforcements;
