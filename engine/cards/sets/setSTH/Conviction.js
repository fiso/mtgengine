"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Conviction extends Card {
  constructor(game) {
    super(game, "Conviction", "Stronghold", "STH");
  }
}

module.exports = Conviction;
