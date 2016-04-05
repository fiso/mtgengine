"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrainGorgers extends UnimplementedCard {
  constructor(game) {
    super(game, "Brain Gorgers", "Planar Chaos", "PLC");
  }
}

module.exports = BrainGorgers;
