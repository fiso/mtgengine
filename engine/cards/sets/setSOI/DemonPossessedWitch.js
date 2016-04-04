"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonPossessedWitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Demon-Possessed Witch", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DemonPossessedWitch;
