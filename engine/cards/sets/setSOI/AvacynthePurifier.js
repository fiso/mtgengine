"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvacynthePurifier extends Card {
  constructor(game) {
    super(game, "Avacyn, the Purifier", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AvacynthePurifier;
