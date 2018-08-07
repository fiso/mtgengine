"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DAvenantHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "D'Avenant Healer", "Time Spiral", "TSP");
  }
}

module.exports = DAvenantHealer;
