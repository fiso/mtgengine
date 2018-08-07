"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HullBreach extends UnimplementedCard {
  constructor (game) {
    super(game, "Hull Breach", "Legendary Cube", "PZ1");
  }
}

module.exports = HullBreach;
