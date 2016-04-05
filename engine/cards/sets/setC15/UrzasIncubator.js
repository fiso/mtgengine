"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasIncubator extends UnimplementedCard {
  constructor(game) {
    super(game, "Urza's Incubator", "Commander 2015", "C15");
  }
}

module.exports = UrzasIncubator;
