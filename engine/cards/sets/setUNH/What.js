"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class What extends UnimplementedCard {
  constructor(game) {
    super(game, "What", "Unhinged", "UNH");
  }
}

module.exports = What;
