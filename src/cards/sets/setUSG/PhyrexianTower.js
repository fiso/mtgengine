"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Tower", "Urza's Saga", "USG");
  }
}

module.exports = PhyrexianTower;
