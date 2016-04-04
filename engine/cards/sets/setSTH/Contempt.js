"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Contempt extends UnimplementedCard {
  constructor(game) {
    super(game, "Contempt", "Stronghold", "STH");
  }
}

module.exports = Contempt;
