"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoubleHeader extends UnimplementedCard {
  constructor(game) {
    super(game, "Double Header", "Unhinged", "UNH");
  }
}

module.exports = DoubleHeader;
