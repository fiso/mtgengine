"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GutlessGhoul extends Card {
  constructor(game) {
    super(game, "Gutless Ghoul", "Coldsnap", "CSP");
  }
}

module.exports = GutlessGhoul;
