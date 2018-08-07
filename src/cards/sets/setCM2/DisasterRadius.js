"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisasterRadius extends UnimplementedCard {
  constructor (game) {
    super(game, "Disaster Radius", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DisasterRadius;
