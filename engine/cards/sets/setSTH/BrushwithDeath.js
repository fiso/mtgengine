"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrushwithDeath extends Card {
  constructor(game) {
    super(game, "Brush with Death", "Stronghold", "STH");
  }
}

module.exports = BrushwithDeath;
