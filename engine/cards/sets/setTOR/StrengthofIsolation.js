"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofIsolation extends UnimplementedCard {
  constructor(game) {
    super(game, "Strength of Isolation", "Torment", "TOR");
  }
}

module.exports = StrengthofIsolation;
