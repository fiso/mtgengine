"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrapmakersSnare extends Card {
  constructor(game) {
    super(game, "Trapmaker's Snare", "Zendikar", "ZEN");
  }
}

module.exports = TrapmakersSnare;
