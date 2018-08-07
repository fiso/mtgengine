"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkmothNexus extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinkmoth Nexus", "Modern Masters 2015", "MM2");
  }
}

module.exports = BlinkmothNexus;
