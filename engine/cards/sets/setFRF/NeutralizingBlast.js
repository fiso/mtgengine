"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeutralizingBlast extends Card {
  constructor(game) {
    super(game, "Neutralizing Blast", "Fate Reforged", "FRF");
  }
}

module.exports = NeutralizingBlast;
