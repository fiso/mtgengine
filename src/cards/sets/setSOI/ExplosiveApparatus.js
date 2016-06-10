"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveApparatus extends UnimplementedCard {
  constructor (game) {
    super(game, "Explosive Apparatus", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ExplosiveApparatus;
