"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OneofthePack extends Card {
  constructor(game) {
    super(game, "One of the Pack", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OneofthePack;
