"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedCloak extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunted Cloak", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HauntedCloak;
