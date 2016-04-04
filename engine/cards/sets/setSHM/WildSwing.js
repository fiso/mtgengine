"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildSwing extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Swing", "Shadowmoor", "SHM");
  }
}

module.exports = WildSwing;
