"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcaneSpyglass extends Card {
  constructor(game) {
    super(game, "Arcane Spyglass", "Darksteel", "DST");
  }
}

module.exports = ArcaneSpyglass;
