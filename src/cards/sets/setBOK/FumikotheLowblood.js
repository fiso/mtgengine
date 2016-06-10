"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FumikotheLowblood extends UnimplementedCard {
  constructor (game) {
    super(game, "Fumiko the Lowblood", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FumikotheLowblood;
