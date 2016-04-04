"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Leap extends Card {
  constructor(game) {
    super(game, "Leap", "Stronghold", "STH");
  }
}

module.exports = Leap;
