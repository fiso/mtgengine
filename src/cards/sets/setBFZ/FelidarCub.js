"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FelidarCub extends UnimplementedCard {
  constructor (game) {
    super(game, "Felidar Cub", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FelidarCub;
