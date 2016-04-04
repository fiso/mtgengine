"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrossbowAmbush extends Card {
  constructor(game) {
    super(game, "Crossbow Ambush", "Stronghold", "STH");
  }
}

module.exports = CrossbowAmbush;
