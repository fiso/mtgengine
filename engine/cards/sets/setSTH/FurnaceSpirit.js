"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Furnace Spirit", "Stronghold", "STH");
  }
}

module.exports = FurnaceSpirit;
