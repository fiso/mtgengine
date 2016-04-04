"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Repopulate extends Card {
  constructor(game) {
    super(game, "Repopulate", "Urza's Legacy", "ULG");
  }
}

module.exports = Repopulate;
