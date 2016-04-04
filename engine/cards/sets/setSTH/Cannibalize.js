"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cannibalize extends Card {
  constructor(game) {
    super(game, "Cannibalize", "Stronghold", "STH");
  }
}

module.exports = Cannibalize;
