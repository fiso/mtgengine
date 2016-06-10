"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnerFlameIgniter extends UnimplementedCard {
  constructor (game) {
    super(game, "Inner-Flame Igniter", "Lorwyn", "LRW");
  }
}

module.exports = InnerFlameIgniter;
