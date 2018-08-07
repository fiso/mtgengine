"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TraitorsRoar extends UnimplementedCard {
  constructor (game) {
    super(game, "Traitor's Roar", "Shadowmoor", "SHM");
  }
}

module.exports = TraitorsRoar;
