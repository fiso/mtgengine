"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameheartWerewolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Flameheart Werewolf", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FlameheartWerewolf;
