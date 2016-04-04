"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindwarper extends Card {
  constructor(game) {
    super(game, "Mindwarper", "Stronghold", "STH");
  }
}

module.exports = Mindwarper;
