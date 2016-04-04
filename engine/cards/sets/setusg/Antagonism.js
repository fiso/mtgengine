"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Antagonism extends Card {
  constructor(game) {
    super(game, "Antagonism", "Urza's Saga", "USG");
  }
}

module.exports = Antagonism;
