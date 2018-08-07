"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerofBogardan extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer of Bogardan", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = HammerofBogardan;
