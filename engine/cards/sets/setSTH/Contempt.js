"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Contempt extends Card {
  constructor(game) {
    super(game, "Contempt", "Stronghold", "STH");
  }
}

module.exports = Contempt;
