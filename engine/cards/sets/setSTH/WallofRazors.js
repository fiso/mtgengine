"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofRazors extends Card {
  constructor(game) {
    super(game, "Wall of Razors", "Stronghold", "STH");
  }
}

module.exports = WallofRazors;
