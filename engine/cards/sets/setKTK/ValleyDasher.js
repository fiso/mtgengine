"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValleyDasher extends Card {
  constructor(game) {
    super(game, "Valley Dasher", "Khans of Tarkir", "KTK");
  }
}

module.exports = ValleyDasher;
