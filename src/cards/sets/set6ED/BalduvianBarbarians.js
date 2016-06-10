"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianBarbarians extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Barbarians", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BalduvianBarbarians;
