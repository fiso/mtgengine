"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrainPower extends UnimplementedCard {
  constructor (game) {
    super(game, "Drain Power", "Collector's Edition", "CED");
  }
}

module.exports = DrainPower;
