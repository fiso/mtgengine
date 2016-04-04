"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelfireCrusader extends Card {
  constructor(game) {
    super(game, "Angelfire Crusader", "Apocalypse", "APC");
  }
}

module.exports = AngelfireCrusader;
