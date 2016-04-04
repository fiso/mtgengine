"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RelentlessDead extends Card {
  constructor(game) {
    super(game, "Relentless Dead", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RelentlessDead;
