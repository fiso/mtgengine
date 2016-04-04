"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorrosiveMentor extends Card {
  constructor(game) {
    super(game, "Corrosive Mentor", "Shadowmoor", "SHM");
  }
}

module.exports = CorrosiveMentor;
