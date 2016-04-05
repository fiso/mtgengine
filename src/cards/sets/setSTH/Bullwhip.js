"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bullwhip extends UnimplementedCard {
  constructor(game) {
    super(game, "Bullwhip", "Stronghold", "STH");
  }
}

module.exports = Bullwhip;
