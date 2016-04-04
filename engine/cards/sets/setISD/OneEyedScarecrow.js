"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OneEyedScarecrow extends Card {
  constructor(game) {
    super(game, "One-Eyed Scarecrow", "Innistrad", "ISD");
  }
}

module.exports = OneEyedScarecrow;
