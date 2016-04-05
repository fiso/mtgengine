"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrozenAether extends UnimplementedCard {
  constructor(game) {
    super(game, "Frozen Æther", "Planar Chaos", "PLC");
  }
}

module.exports = FrozenAether;
