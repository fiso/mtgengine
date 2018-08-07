"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MolderSlug extends UnimplementedCard {
  constructor (game) {
    super(game, "Molder Slug", "Mirrodin", "MRD");
  }
}

module.exports = MolderSlug;
