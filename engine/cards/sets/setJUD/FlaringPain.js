"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlaringPain extends Card {
  constructor(game) {
    super(game, "Flaring Pain", "Judgment", "JUD");
  }
}

module.exports = FlaringPain;
