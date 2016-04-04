"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullProfusion extends UnimplementedCard {
  constructor(game) {
    super(game, "Null Profusion", "Planar Chaos", "PLC");
  }
}

module.exports = NullProfusion;
