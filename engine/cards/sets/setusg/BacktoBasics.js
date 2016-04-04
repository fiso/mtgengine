"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BacktoBasics extends Card {
  constructor(game) {
    super(game, "Back to Basics", "Urza's Saga", "USG");
  }
}

module.exports = BacktoBasics;
