"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnwardVictory extends UnimplementedCard {
  constructor (game) {
    super(game, "Onward // Victory", "Amonkhet", "AKH");
  }
}

module.exports = OnwardVictory;
