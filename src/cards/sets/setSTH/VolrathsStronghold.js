"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsStronghold extends UnimplementedCard {
  constructor (game) {
    super(game, "Volrath's Stronghold", "Stronghold", "STH");
  }
}

module.exports = VolrathsStronghold;
