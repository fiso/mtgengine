"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeedlebiteTrap extends Card {
  constructor(game) {
    super(game, "Needlebite Trap", "Zendikar", "ZEN");
  }
}

module.exports = NeedlebiteTrap;
