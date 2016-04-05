"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvangelofHeliod extends UnimplementedCard {
  constructor(game) {
    super(game, "Evangel of Heliod", "Theros", "THS");
  }
}

module.exports = EvangelofHeliod;
