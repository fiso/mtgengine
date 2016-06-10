"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelentlessDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Relentless Dead", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RelentlessDead;
