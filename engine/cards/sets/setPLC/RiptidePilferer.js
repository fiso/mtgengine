"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiptidePilferer extends UnimplementedCard {
  constructor(game) {
    super(game, "Riptide Pilferer", "Planar Chaos", "PLC");
  }
}

module.exports = RiptidePilferer;
