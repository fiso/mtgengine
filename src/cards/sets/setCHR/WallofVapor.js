"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofVapor extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Vapor", "Chronicles", "CHR");
  }
}

module.exports = WallofVapor;
