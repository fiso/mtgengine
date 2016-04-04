"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScroungedScythe extends Card {
  constructor(game) {
    super(game, "Scrounged Scythe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ScroungedScythe;
