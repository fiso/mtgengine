"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThalakosDeceiver extends Card {
  constructor(game) {
    super(game, "Thalakos Deceiver", "Stronghold", "STH");
  }
}

module.exports = ThalakosDeceiver;
