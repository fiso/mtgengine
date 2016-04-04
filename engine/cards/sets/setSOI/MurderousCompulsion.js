"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurderousCompulsion extends Card {
  constructor(game) {
    super(game, "Murderous Compulsion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MurderousCompulsion;
