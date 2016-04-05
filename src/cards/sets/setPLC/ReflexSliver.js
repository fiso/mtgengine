"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReflexSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Reflex Sliver", "Planar Chaos", "PLC");
  }
}

module.exports = ReflexSliver;
