"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeadbyExample extends UnimplementedCard {
  constructor (game) {
    super(game, "Lead by Example", "Battlebond", "BBD");
  }
}

module.exports = LeadbyExample;
