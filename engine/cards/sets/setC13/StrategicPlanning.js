"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrategicPlanning extends Card {
  constructor(game) {
    super(game, "Strategic Planning", "Commander 2013 Edition", "C13");
  }
}

module.exports = StrategicPlanning;
