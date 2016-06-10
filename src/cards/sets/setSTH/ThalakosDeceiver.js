"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThalakosDeceiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Thalakos Deceiver", "Stronghold", "STH");
  }
}

module.exports = ThalakosDeceiver;
