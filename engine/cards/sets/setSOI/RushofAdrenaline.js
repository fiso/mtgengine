"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RushofAdrenaline extends Card {
  constructor(game) {
    super(game, "Rush of Adrenaline", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RushofAdrenaline;
