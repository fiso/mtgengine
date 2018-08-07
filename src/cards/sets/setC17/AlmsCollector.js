"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlmsCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Alms Collector", "Commander 2017", "C17");
  }
}

module.exports = AlmsCollector;
