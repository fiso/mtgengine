"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CairnWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cairn Wanderer", "Lorwyn", "LRW");
  }
}

module.exports = CairnWanderer;
