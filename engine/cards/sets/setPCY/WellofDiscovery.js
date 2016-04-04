"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WellofDiscovery extends Card {
  constructor(game) {
    super(game, "Well of Discovery", "Prophecy", "PCY");
  }
}

module.exports = WellofDiscovery;
