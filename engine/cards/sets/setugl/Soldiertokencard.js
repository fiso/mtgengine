"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soldiertokencard extends Card {
  constructor(game) {
    super(game, "Soldier token card", "Unglued", "UGL");
  }
}

module.exports = Soldiertokencard;
