"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Squirreltokencard extends Card {
  constructor(game) {
    super(game, "Squirrel token card", "Unglued", "UGL");
  }
}

module.exports = Squirreltokencard;
