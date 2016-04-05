"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdventuringGear extends UnimplementedCard {
  constructor(game) {
    super(game, "Adventuring Gear", "Zendikar", "ZEN");
  }
}

module.exports = AdventuringGear;
