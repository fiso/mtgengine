"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HordeofNotions extends UnimplementedCard {
  constructor (game) {
    super(game, "Horde of Notions", "Lorwyn", "LRW");
  }
}

module.exports = HordeofNotions;
