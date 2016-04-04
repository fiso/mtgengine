"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindSculpt extends Card {
  constructor(game) {
    super(game, "Mind Sculpt", "Magic 2013", "M13");
  }
}

module.exports = MindSculpt;
