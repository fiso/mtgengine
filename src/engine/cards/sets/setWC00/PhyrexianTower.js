"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Tower", "World Championship Decks 2000", "WC00");
  }
}

module.exports = PhyrexianTower;
