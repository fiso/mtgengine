"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceDrain extends Card {
  constructor(game) {
    super(game, "Essence Drain", "Darksteel", "DST");
  }
}

module.exports = EssenceDrain;
