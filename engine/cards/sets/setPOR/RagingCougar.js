"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingCougar extends Card {
  constructor(game) {
    super(game, "Raging Cougar", "Portal", "POR");
  }
}

module.exports = RagingCougar;
