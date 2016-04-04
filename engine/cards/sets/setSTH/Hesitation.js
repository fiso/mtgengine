"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hesitation extends Card {
  constructor(game) {
    super(game, "Hesitation", "Stronghold", "STH");
  }
}

module.exports = Hesitation;
