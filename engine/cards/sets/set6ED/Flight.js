"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flight extends UnimplementedCard {
  constructor(game) {
    super(game, "Flight", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flight;
