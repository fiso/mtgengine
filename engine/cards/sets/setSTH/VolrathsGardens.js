"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolrathsGardens extends Card {
  constructor(game) {
    super(game, "Volrath's Gardens", "Stronghold", "STH");
  }
}

module.exports = VolrathsGardens;
