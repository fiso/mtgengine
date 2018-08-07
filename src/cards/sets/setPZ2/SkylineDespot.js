"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkylineDespot extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyline Despot", "You Make the Cube", "PZ2");
  }
}

module.exports = SkylineDespot;
