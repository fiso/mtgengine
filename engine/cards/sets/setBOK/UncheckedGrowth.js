"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UncheckedGrowth extends Card {
  constructor(game) {
    super(game, "Unchecked Growth", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = UncheckedGrowth;
