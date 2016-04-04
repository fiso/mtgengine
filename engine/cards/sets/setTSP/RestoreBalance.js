"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestoreBalance extends UnimplementedCard {
  constructor(game) {
    super(game, "Restore Balance", "Time Spiral", "TSP");
  }
}

module.exports = RestoreBalance;
