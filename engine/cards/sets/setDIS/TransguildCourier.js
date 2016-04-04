"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TransguildCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Transguild Courier", "Dissension", "DIS");
  }
}

module.exports = TransguildCourier;
