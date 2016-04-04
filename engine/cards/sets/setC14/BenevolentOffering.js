"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenevolentOffering extends Card {
  constructor(game) {
    super(game, "Benevolent Offering", "Commander 2014", "C14");
  }
}

module.exports = BenevolentOffering;
