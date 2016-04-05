"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NutCollector extends UnimplementedCard {
  constructor(game) {
    super(game, "Nut Collector", "Odyssey", "ODY");
  }
}

module.exports = NutCollector;
