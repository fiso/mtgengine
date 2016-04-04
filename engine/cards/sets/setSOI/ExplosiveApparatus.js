"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExplosiveApparatus extends Card {
  constructor(game) {
    super(game, "Explosive Apparatus", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ExplosiveApparatus;
