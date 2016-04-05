"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldBottlingKit extends UnimplementedCard {
  constructor(game) {
    super(game, "World-Bottling Kit", "Unhinged", "UNH");
  }
}

module.exports = WorldBottlingKit;
