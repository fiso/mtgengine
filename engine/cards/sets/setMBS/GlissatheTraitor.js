"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlissatheTraitor extends Card {
  constructor(game) {
    super(game, "Glissa, the Traitor", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GlissatheTraitor;
