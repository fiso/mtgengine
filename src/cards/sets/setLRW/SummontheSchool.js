"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummontheSchool extends UnimplementedCard {
  constructor (game) {
    super(game, "Summon the School", "Lorwyn", "LRW");
  }
}

module.exports = SummontheSchool;
