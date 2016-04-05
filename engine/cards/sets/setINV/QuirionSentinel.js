"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuirionSentinel extends UnimplementedCard {
  constructor(game) {
    super(game, "Quirion Sentinel", "Invasion", "INV");
  }
}

module.exports = QuirionSentinel;
