"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengerFolk extends UnimplementedCard {
  constructor(game) {
    super(game, "Scavenger Folk", "Anthologies", "ATH");
  }
}

module.exports = ScavengerFolk;
