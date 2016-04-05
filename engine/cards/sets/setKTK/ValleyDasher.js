"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValleyDasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Valley Dasher", "Khans of Tarkir", "KTK");
  }
}

module.exports = ValleyDasher;
