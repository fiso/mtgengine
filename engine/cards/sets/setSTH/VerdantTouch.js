"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VerdantTouch extends Card {
  constructor(game) {
    super(game, "Verdant Touch", "Stronghold", "STH");
  }
}

module.exports = VerdantTouch;
