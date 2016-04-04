"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrigidHeroofKinsbaile extends UnimplementedCard {
  constructor(game) {
    super(game, "Brigid, Hero of Kinsbaile", "Lorwyn", "LRW");
  }
}

module.exports = BrigidHeroofKinsbaile;
