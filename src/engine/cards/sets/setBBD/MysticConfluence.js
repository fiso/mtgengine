"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticConfluence extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Confluence", "Battlebond", "BBD");
  }
}

module.exports = MysticConfluence;
