"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GluttonousSlime extends Card {
  constructor(game) {
    super(game, "Gluttonous Slime", "Conflux", "CON");
  }
}

module.exports = GluttonousSlime;
