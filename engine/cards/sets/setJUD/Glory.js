"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Glory extends Card {
  constructor(game) {
    super(game, "Glory", "Judgment", "JUD");
  }
}

module.exports = Glory;
