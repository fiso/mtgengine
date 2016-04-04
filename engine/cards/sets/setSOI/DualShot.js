"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DualShot extends Card {
  constructor(game) {
    super(game, "Dual Shot", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DualShot;
