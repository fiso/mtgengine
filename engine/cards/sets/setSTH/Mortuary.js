"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortuary", "Stronghold", "STH");
  }
}

module.exports = Mortuary;
