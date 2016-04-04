"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrushwithDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Brush with Death", "Stronghold", "STH");
  }
}

module.exports = BrushwithDeath;
