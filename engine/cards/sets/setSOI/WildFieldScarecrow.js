"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildFieldScarecrow extends Card {
  constructor(game) {
    super(game, "Wild-Field Scarecrow", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WildFieldScarecrow;
