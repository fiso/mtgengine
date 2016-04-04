"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeethingAnger extends Card {
  constructor(game) {
    super(game, "Seething Anger", "Stronghold", "STH");
  }
}

module.exports = SeethingAnger;
