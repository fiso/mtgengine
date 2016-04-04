"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavensCrime extends UnimplementedCard {
  constructor(game) {
    super(game, "Raven's Crime", "Eventide", "EVE");
  }
}

module.exports = RavensCrime;
