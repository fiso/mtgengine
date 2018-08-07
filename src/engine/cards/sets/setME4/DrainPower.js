"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrainPower extends UnimplementedCard {
  constructor (game) {
    super(game, "Drain Power", "Masters Edition IV", "ME4");
  }
}

module.exports = DrainPower;
