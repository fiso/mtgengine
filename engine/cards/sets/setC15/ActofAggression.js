"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ActofAggression extends Card {
  constructor(game) {
    super(game, "Act of Aggression", "Commander 2015", "C15");
  }
}

module.exports = ActofAggression;
