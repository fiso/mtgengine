"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasIncubator extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Incubator", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = UrzasIncubator;
