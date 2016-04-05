"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ActofAggression extends UnimplementedCard {
  constructor(game) {
    super(game, "Act of Aggression", "Commander 2015", "C15");
  }
}

module.exports = ActofAggression;
