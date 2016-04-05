"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnuckleboneWitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Knucklebone Witch", "Lorwyn", "LRW");
  }
}

module.exports = KnuckleboneWitch;
