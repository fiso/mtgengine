"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RisetotheChallenge extends Card {
  constructor(game) {
    super(game, "Rise to the Challenge", "Born of the Gods", "BNG");
  }
}

module.exports = RisetotheChallenge;
