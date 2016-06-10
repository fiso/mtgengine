"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornetHarasser extends UnimplementedCard {
  constructor (game) {
    super(game, "Hornet Harasser", "Lorwyn", "LRW");
  }
}

module.exports = HornetHarasser;
