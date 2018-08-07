"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveEffort extends UnimplementedCard {
  constructor (game) {
    super(game, "Collective Effort", "Eldritch Moon", "EMN");
  }
}

module.exports = CollectiveEffort;
