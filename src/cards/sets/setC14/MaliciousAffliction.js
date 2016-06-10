"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaliciousAffliction extends UnimplementedCard {
  constructor (game) {
    super(game, "Malicious Affliction", "Commander 2014", "C14");
  }
}

module.exports = MaliciousAffliction;
