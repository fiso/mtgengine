"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerLeak extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Leak", "Collector's Edition", "CED");
  }
}

module.exports = PowerLeak;
