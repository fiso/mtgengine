"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WelkinGuide extends Card {
  constructor(game) {
    super(game, "Welkin Guide", "Shards of Alara", "ALA");
  }
}

module.exports = WelkinGuide;
