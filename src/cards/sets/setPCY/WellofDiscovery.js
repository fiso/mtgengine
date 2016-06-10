"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WellofDiscovery extends UnimplementedCard {
  constructor (game) {
    super(game, "Well of Discovery", "Prophecy", "PCY");
  }
}

module.exports = WellofDiscovery;
