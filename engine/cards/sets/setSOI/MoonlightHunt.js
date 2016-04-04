"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonlightHunt extends Card {
  constructor(game) {
    super(game, "Moonlight Hunt", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MoonlightHunt;
