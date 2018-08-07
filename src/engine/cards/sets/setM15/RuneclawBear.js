"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuneclawBear extends UnimplementedCard {
  constructor (game) {
    super(game, "Runeclaw Bear", "Magic 2015", "M15");
  }
}

module.exports = RuneclawBear;
