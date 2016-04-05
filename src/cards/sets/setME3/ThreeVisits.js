"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThreeVisits extends UnimplementedCard {
  constructor(game) {
    super(game, "Three Visits", "Masters Edition III", "ME3");
  }
}

module.exports = ThreeVisits;
