"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnapsailGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Snapsail Glider", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SnapsailGlider;
