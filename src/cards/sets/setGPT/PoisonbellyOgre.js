"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoisonbellyOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Poisonbelly Ogre", "Guildpact", "GPT");
  }
}

module.exports = PoisonbellyOgre;
