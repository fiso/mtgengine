"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OversoldCemetery extends UnimplementedCard {
  constructor(game) {
    super(game, "Oversold Cemetery", "Onslaught", "ONS");
  }
}

module.exports = OversoldCemetery;
