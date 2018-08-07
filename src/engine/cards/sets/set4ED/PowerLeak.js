"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerLeak extends UnimplementedCard {
  constructor (game) {
    super(game, "Power Leak", "Fourth Edition", "4ED");
  }
}

module.exports = PowerLeak;
