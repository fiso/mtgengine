"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert Drake", "Portal", "POR");
  }
}

module.exports = DesertDrake;
