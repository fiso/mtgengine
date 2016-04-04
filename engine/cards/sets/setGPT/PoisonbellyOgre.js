"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PoisonbellyOgre extends Card {
  constructor(game) {
    super(game, "Poisonbelly Ogre", "Guildpact", "GPT");
  }
}

module.exports = PoisonbellyOgre;
