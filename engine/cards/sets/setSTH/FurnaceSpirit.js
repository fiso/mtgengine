"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurnaceSpirit extends Card {
  constructor(game) {
    super(game, "Furnace Spirit", "Stronghold", "STH");
  }
}

module.exports = FurnaceSpirit;
