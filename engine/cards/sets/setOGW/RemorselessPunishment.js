"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RemorselessPunishment extends Card {
  constructor(game) {
    super(game, "Remorseless Punishment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RemorselessPunishment;
