"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyshroudArcher extends Card {
  constructor(game) {
    super(game, "Skyshroud Archer", "Stronghold", "STH");
  }
}

module.exports = SkyshroudArcher;
