"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleepersGuile extends UnimplementedCard {
  constructor (game) {
    super(game, "Sleeper's Guile", "Urza's Legacy", "ULG");
  }
}

module.exports = SleepersGuile;
