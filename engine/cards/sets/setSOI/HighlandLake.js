"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighlandLake extends Card {
  constructor(game) {
    super(game, "Highland Lake", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HighlandLake;
