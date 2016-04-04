"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantSlugBase = require("../setCHR/GiantSlug.js");

class GiantSlug extends GiantSlugBase {
  constructor(game) {
    super(game, "Giant Slug", "Legends", "LEG");
  }
}

module.exports = GiantSlug;
