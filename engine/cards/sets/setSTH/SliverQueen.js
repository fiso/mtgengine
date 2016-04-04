"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SliverQueen extends Card {
  constructor(game) {
    super(game, "Sliver Queen", "Stronghold", "STH");
  }
}

module.exports = SliverQueen;
