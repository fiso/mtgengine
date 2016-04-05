"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrilloftheHunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrill of the Hunt", "Time Spiral", "TSP");
  }
}

module.exports = ThrilloftheHunt;
