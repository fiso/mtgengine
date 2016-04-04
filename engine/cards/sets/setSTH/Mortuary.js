"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mortuary extends Card {
  constructor(game) {
    super(game, "Mortuary", "Stronghold", "STH");
  }
}

module.exports = Mortuary;
