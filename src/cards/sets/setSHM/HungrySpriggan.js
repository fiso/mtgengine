"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungrySpriggan extends UnimplementedCard {
  constructor(game) {
    super(game, "Hungry Spriggan", "Shadowmoor", "SHM");
  }
}

module.exports = HungrySpriggan;
