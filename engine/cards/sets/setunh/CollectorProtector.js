"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectorProtector extends UnimplementedCard {
  constructor(game) {
    super(game, "Collector Protector", "Unhinged", "UNH");
  }
}

module.exports = CollectorProtector;
