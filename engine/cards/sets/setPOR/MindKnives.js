"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindKnives extends Card {
  constructor(game) {
    super(game, "Mind Knives", "Portal", "POR");
  }
}

module.exports = MindKnives;
