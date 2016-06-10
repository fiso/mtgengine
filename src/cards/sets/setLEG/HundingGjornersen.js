"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HundingGjornersen extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunding Gjornersen", "Legends", "LEG");
  }
}

module.exports = HundingGjornersen;
