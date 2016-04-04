"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpittingSlug extends Card {
  constructor(game) {
    super(game, "Spitting Slug", "The Dark", "DRK");
  }
}

module.exports = SpittingSlug;
