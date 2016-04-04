"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ApothecaryGeist extends Card {
  constructor(game) {
    super(game, "Apothecary Geist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ApothecaryGeist;
