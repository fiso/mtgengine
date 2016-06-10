"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingGoblins extends UnimplementedCard {
  constructor (game) {
    super(game, "Wandering Goblins", "Conflux", "CON");
  }
}

module.exports = WanderingGoblins;
