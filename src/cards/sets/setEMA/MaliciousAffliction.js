"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaliciousAffliction extends UnimplementedCard {
  constructor (game) {
    super(game, "Malicious Affliction", "Eternal Masters", "EMA");
  }
}

module.exports = MaliciousAffliction;
