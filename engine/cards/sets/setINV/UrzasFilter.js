"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasFilter extends UnimplementedCard {
  constructor(game) {
    super(game, "Urza's Filter", "Invasion", "INV");
  }
}

module.exports = UrzasFilter;
