"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunseedNurturer extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunseed Nurturer", "Shards of Alara", "ALA");
  }
}

module.exports = SunseedNurturer;
