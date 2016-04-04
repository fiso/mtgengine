"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalciformPools extends UnimplementedCard {
  constructor(game) {
    super(game, "Calciform Pools", "Time Spiral", "TSP");
  }
}

module.exports = CalciformPools;
