"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plains extends UnimplementedCard {
  constructor(game) {
    super(game, "Plains", "Anthologies", "ATH");
  }
}

module.exports = Plains;
