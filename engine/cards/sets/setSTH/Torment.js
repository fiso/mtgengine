"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Torment extends Card {
  constructor(game) {
    super(game, "Torment", "Stronghold", "STH");
  }
}

module.exports = Torment;
