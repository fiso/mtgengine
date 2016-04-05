"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicSubmersion extends UnimplementedCard {
  constructor(game) {
    super(game, "Volcanic Submersion", "Shards of Alara", "ALA");
  }
}

module.exports = VolcanicSubmersion;
