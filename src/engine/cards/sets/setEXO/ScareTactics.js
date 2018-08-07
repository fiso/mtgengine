"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScareTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Scare Tactics", "Exodus", "EXO");
  }
}

module.exports = ScareTactics;
