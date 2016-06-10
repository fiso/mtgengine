"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerofBogardan extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer of Bogardan", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HammerofBogardan;
