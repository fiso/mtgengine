"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianBarbarians extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Barbarians", "Ninth Edition", "9ED");
  }
}

module.exports = BalduvianBarbarians;
