"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrossbowAmbush extends UnimplementedCard {
  constructor (game) {
    super(game, "Crossbow Ambush", "Stronghold", "STH");
  }
}

module.exports = CrossbowAmbush;
