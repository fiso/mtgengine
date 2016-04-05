"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leap extends UnimplementedCard {
  constructor(game) {
    super(game, "Leap", "Stronghold", "STH");
  }
}

module.exports = Leap;
