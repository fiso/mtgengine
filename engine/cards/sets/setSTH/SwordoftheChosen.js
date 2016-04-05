"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordoftheChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Sword of the Chosen", "Stronghold", "STH");
  }
}

module.exports = SwordoftheChosen;
