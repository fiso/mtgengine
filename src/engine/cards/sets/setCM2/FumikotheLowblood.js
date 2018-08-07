"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FumikotheLowblood extends UnimplementedCard {
  constructor (game) {
    super(game, "Fumiko the Lowblood", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FumikotheLowblood;
