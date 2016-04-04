"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MolderSlug extends Card {
  constructor(game) {
    super(game, "Molder Slug", "Mirrodin", "MRD");
  }
}

module.exports = MolderSlug;
