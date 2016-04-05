"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutlandColossus extends UnimplementedCard {
  constructor(game) {
    super(game, "Outland Colossus", "Magic Origins", "ORI");
  }
}

module.exports = OutlandColossus;
