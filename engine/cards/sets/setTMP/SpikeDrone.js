"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeDrone extends Card {
  constructor(game) {
    super(game, "Spike Drone", "Tempest", "TMP");
  }
}

module.exports = SpikeDrone;
