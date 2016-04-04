"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExposeEvil extends Card {
  constructor(game) {
    super(game, "Expose Evil", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ExposeEvil;
