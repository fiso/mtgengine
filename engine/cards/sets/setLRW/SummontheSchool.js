"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummontheSchool extends Card {
  constructor(game) {
    super(game, "Summon the School", "Lorwyn", "LRW");
  }
}

module.exports = SummontheSchool;
