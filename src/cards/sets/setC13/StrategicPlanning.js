"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrategicPlanning extends UnimplementedCard {
  constructor (game) {
    super(game, "Strategic Planning", "Commander 2013 Edition", "C13");
  }
}

module.exports = StrategicPlanning;
