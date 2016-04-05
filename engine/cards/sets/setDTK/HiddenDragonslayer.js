"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenDragonslayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Hidden Dragonslayer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HiddenDragonslayer;
