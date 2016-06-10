"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhoxCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhox Charger", "Shards of Alara", "ALA");
  }
}

module.exports = RhoxCharger;
