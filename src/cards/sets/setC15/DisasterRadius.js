"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisasterRadius extends UnimplementedCard {
  constructor (game) {
    super(game, "Disaster Radius", "Commander 2015", "C15");
  }
}

module.exports = DisasterRadius;
