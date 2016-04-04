"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThaliasLieutenant extends Card {
  constructor(game) {
    super(game, "Thalia's Lieutenant", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThaliasLieutenant;
