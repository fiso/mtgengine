"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gloomhunter extends Card {
  constructor(game) {
    super(game, "Gloomhunter", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Gloomhunter;
