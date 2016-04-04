"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Transcendence extends Card {
  constructor(game) {
    super(game, "Transcendence", "Torment", "TOR");
  }
}

module.exports = Transcendence;
