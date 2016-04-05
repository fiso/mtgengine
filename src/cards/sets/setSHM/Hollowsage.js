"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hollowsage extends UnimplementedCard {
  constructor(game) {
    super(game, "Hollowsage", "Shadowmoor", "SHM");
  }
}

module.exports = Hollowsage;
