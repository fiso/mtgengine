"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillageMessenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Village Messenger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VillageMessenger;
