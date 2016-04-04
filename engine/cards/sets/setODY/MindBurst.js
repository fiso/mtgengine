"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindBurst extends Card {
  constructor(game) {
    super(game, "Mind Burst", "Odyssey", "ODY");
  }
}

module.exports = MindBurst;
