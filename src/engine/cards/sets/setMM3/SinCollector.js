"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Sin Collector", "Modern Masters 2017", "MM3");
  }
}

module.exports = SinCollector;
