"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalciformPools extends Card {
  constructor(game) {
    super(game, "Calciform Pools", "Time Spiral", "TSP");
  }
}

module.exports = CalciformPools;
