"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PulsemageAdvocate extends Card {
  constructor(game) {
    super(game, "Pulsemage Advocate", "Judgment", "JUD");
  }
}

module.exports = PulsemageAdvocate;
