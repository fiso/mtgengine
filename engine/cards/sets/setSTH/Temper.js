"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Temper extends Card {
  constructor(game) {
    super(game, "Temper", "Stronghold", "STH");
  }
}

module.exports = Temper;
