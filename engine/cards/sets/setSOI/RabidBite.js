"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RabidBite extends Card {
  constructor(game) {
    super(game, "Rabid Bite", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RabidBite;
