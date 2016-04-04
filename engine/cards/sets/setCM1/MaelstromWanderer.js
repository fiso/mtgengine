"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromWanderer extends UnimplementedCard {
  constructor(game) {
    super(game, "Maelstrom Wanderer", "Commander's Arsenal", "CM1");
  }
}

module.exports = MaelstromWanderer;
