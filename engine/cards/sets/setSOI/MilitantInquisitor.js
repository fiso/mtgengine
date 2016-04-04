"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MilitantInquisitor extends Card {
  constructor(game) {
    super(game, "Militant Inquisitor", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MilitantInquisitor;
