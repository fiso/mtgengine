"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToothCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Tooth Collector", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ToothCollector;
