"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlaringPain extends UnimplementedCard {
  constructor (game) {
    super(game, "Flaring Pain", "Judgment", "JUD");
  }
}

module.exports = FlaringPain;
