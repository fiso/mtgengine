"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RayofErasure extends Card {
  constructor(game) {
    super(game, "Ray of Erasure", "Ice Age", "ICE");
  }
}

module.exports = RayofErasure;
