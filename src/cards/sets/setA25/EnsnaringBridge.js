"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnsnaringBridge extends UnimplementedCard {
  constructor (game) {
    super(game, "Ensnaring Bridge", "Masters 25", "A25");
  }
}

module.exports = EnsnaringBridge;
