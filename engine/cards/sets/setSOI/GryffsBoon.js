"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GryffsBoon extends Card {
  constructor(game) {
    super(game, "Gryff's Boon", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GryffsBoon;
