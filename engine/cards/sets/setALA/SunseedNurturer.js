"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunseedNurturer extends Card {
  constructor(game) {
    super(game, "Sunseed Nurturer", "Shards of Alara", "ALA");
  }
}

module.exports = SunseedNurturer;
