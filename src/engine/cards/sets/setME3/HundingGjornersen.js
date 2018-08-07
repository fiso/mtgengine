"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HundingGjornersen extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunding Gjornersen", "Masters Edition III", "ME3");
  }
}

module.exports = HundingGjornersen;
