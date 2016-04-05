"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerSurge extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Surge", "Collector's Edition", "CED");
  }
}

module.exports = PowerSurge;
