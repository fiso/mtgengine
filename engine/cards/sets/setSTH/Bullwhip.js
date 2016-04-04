"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bullwhip extends Card {
  constructor(game) {
    super(game, "Bullwhip", "Stronghold", "STH");
  }
}

module.exports = Bullwhip;
