"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpireOwl extends Card {
  constructor(game) {
    super(game, "Spire Owl", "Urza's Saga", "USG");
  }
}

module.exports = SpireOwl;
