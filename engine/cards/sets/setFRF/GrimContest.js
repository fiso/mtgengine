"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimContest extends Card {
  constructor(game) {
    super(game, "Grim Contest", "Fate Reforged", "FRF");
  }
}

module.exports = GrimContest;
