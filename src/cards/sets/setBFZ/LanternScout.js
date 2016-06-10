"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LanternScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Lantern Scout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = LanternScout;
