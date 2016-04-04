"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HulkingDevil extends Card {
  constructor(game) {
    super(game, "Hulking Devil", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HulkingDevil;
