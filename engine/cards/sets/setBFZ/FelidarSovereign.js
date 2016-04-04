"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FelidarSovereign extends UnimplementedCard {
  constructor(game) {
    super(game, "Felidar Sovereign", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FelidarSovereign;
