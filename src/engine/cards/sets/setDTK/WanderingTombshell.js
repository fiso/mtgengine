"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingTombshell extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Tombshell", "Dragons of Tarkir", "DTK");
  }
}

module.exports = WanderingTombshell;
