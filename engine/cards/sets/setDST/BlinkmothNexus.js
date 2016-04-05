"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkmothNexus extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinkmoth Nexus", "Darksteel", "DST");
  }
}

module.exports = BlinkmothNexus;
