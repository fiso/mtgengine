"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tidewalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Tidewalker", "Planar Chaos", "PLC");
  }
}

module.exports = Tidewalker;
