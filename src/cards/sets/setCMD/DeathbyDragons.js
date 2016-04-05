"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathbyDragons extends UnimplementedCard {
  constructor(game) {
    super(game, "Death by Dragons", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DeathbyDragons;
