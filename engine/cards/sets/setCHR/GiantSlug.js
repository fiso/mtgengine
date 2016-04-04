"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantSlug extends Card {
  constructor(game) {
    super(game, "Giant Slug", "Chronicles", "CHR");
  }
}

module.exports = GiantSlug;
