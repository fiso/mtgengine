"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Burgeoning extends Card {
  constructor(game) {
    super(game, "Burgeoning", "Stronghold", "STH");
  }
}

module.exports = Burgeoning;
