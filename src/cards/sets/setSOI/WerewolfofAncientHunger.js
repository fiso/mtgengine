"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WerewolfofAncientHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Werewolf of Ancient Hunger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WerewolfofAncientHunger;
