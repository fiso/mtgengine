"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingPlane extends Card {
  constructor(game) {
    super(game, "Living Plane", "Legends", "LEG");
  }
}

module.exports = LivingPlane;
