"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasIncubator extends Card {
  constructor(game) {
    super(game, "Urza's Incubator", "Commander 2015", "C15");
  }
}

module.exports = UrzasIncubator;
