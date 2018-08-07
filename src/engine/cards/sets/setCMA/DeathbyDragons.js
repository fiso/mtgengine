"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathbyDragons extends UnimplementedCard {
  constructor (game) {
    super(game, "Death by Dragons", "Commander Anthology", "CMA");
  }
}

module.exports = DeathbyDragons;
