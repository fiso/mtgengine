"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelfireCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelfire Crusader", "Apocalypse", "APC");
  }
}

module.exports = AngelfireCrusader;
