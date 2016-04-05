"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiskyMove extends UnimplementedCard {
  constructor(game) {
    super(game, "Risky Move", "Onslaught", "ONS");
  }
}

module.exports = RiskyMove;
