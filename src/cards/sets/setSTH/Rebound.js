"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rebound extends UnimplementedCard {
  constructor(game) {
    super(game, "Rebound", "Stronghold", "STH");
  }
}

module.exports = Rebound;
