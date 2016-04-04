"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuilledWolf extends Card {
  constructor(game) {
    super(game, "Quilled Wolf", "Shadows over Innistrad", "SOI");
  }
}

module.exports = QuilledWolf;
