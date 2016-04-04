"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TransguildCourier extends Card {
  constructor(game) {
    super(game, "Transguild Courier", "Dissension", "DIS");
  }
}

module.exports = TransguildCourier;
