"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosReckoner extends UnimplementedCard {
  constructor(game) {
    super(game, "Boros Reckoner", "Gatecrash", "GTC");
  }
}

module.exports = BorosReckoner;
