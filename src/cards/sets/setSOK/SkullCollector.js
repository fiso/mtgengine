"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Skull Collector", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SkullCollector;
