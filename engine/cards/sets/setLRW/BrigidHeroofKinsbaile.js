"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrigidHeroofKinsbaile extends Card {
  constructor(game) {
    super(game, "Brigid, Hero of Kinsbaile", "Lorwyn", "LRW");
  }
}

module.exports = BrigidHeroofKinsbaile;
