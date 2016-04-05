"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScentofIvy extends UnimplementedCard {
  constructor(game) {
    super(game, "Scent of Ivy", "Urza's Destiny", "UDS");
  }
}

module.exports = ScentofIvy;
