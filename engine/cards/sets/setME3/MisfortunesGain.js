"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MisfortunesGain extends Card {
  constructor(game) {
    super(game, "Misfortune's Gain", "Masters Edition III", "ME3");
  }
}

module.exports = MisfortunesGain;
