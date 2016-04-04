"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwordoftheChosen extends Card {
  constructor(game) {
    super(game, "Sword of the Chosen", "Stronghold", "STH");
  }
}

module.exports = SwordoftheChosen;
