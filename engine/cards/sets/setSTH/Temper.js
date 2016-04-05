"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Temper extends UnimplementedCard {
  constructor(game) {
    super(game, "Temper", "Stronghold", "STH");
  }
}

module.exports = Temper;
